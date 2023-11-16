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

# Check if changeset exists
if [ $changeset_check == 0 ] ;
then
  echo "changeset exists, continuing..."
else
  echo "changeset doesn't exist, creating..."
  pnpm changeset
fi

# Check if user needs snapshot build
read -p "Generate snapshot build (y/n): " generate_snapshot
echo $generate_snapshot

# Execute snapshot build based on user input
shopt -s nocasematch
if [[ $generate_snapshot == "y" ]] ;
then
  echo "generating snapshot version..."
  pnpm changeset version --snapshot
fi

# lint, test (when added), build, commit
pnpm lint && pnpm build && pnpm cz
