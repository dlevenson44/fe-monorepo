'use client'
import { useState, useMemo } from 'react'
import type { FunctionComponent, FormEvent } from 'react'

import { TextInput, TextArea } from '@ui/components'

// import ETextInput from './text-input'

interface PostTaskPayload {
  title: string
  description: string
}

const AddTodo: FunctionComponent = () => {
  const [postPayload, setPostPayload] = useState<PostTaskPayload>({
    title: '',
    description: '',
  })

  const isValidTitle = useMemo(
    () => postPayload.title.length < 255,
    [postPayload]
  )

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setPostPayload({
      ...postPayload,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  console.log('payload: ', isValidTitle, postPayload)
  return (
    <div className="flex h-screen w-1/2 flex-col items-center bg-test-color justify-between">
      <div className="flex justify-center h-full w-full">
        <div className="flex flex-col justify-around items-center h-1/2 w-full p-4">
          <TextInput
            name="title"
            value={postPayload.title}
            onChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
            label="Add a ToDo 123"
          />
          {/* <ETextInput
            name="title"
            value={postPayload.title}
            onChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
            label="Add a ToDo 123"
          /> */}
          {/* <div className={isValidTitle ? '' : `rounded-md bg-red-600 p-1`}>
                <p className="text-white">
                    {!isValidTitle && 'Title is over 255 characters'}
                </p>
            </div> */}
          {/* <div className="relative flex flex-col w-1/2">
        <textarea
          name="description"
          // placeholder="Task Description (Optional)"
          className="outline rounded-md p-1 px-2"
          value={postPayload.description}
          onChange={(e) => handleChange(e)}
        />
        <label
          className={`absolute pointer-events-none origin-top-left transition-transform left-3 -top-5 ${responsiveLabelStyles}`}
        >
          Create a ToDo
        </label>
      </div> */}
          <TextArea
            name="description"
            value={postPayload.description}
            onChange={(e) => handleChange(e)}
            label="Details (Optional)"
          />
        </div>
      </div>
    </div>
  )
}

export default AddTodo
