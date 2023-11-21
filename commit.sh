#!/bin/bash
# App Root Directory
current_directory=$(pwd)
# Default changeset file check to false
changeset_check=1


# Check if changeset file exists
changeset_existance_check () {
  changeset_path=$(pwd)/.changeset
  cd $changeset_path
  for file in *; do
    # Check for non-README markdown file, if found update changeset_check
    if [ $(echo -n $file | tail -c 3 ) == ".md" ] && [ $file != "README.md" ] ; 
    then
      changeset_check=0
    fi
  done;
}

changeset_existance_check

shopt -s nocasematch

# Check if changeset exists
if [ $changeset_check == 0 ] ;
then
  echo "changeset exists, continuing..."
else
  # echo "changeset doesn't exist, creating..."
  read -p "no changeset found, would you like to generate one? (y/n): " generate_changeset
  if [[ $generate_changeset == "y" ]] ;
  then
    echo "generating changeset..."
    pnpm changeset
  fi
fi

# Check if user needs snapshot build
read -p "Generate snapshot build (y/n): " generate_snapshot_build

# Execute snapshot build based on user input
if [[ $generate_snapshot_build == "y" ]] ;
then
  echo "generating snapshot version..."
  pnpm changeset version --snapshot
fi

# Check if user needs Prod build
read -p "Generate Prod build (y/n): " generate_prod_build
if [[ $generate_prod_build == "y" ]] ;
then
  echo "generating prod version..."
  pnpm changeset version
fi

# lint, test (when added), build, commit
pnpm lint && pnpm build && pnpm cz
