'use client'
import { useState, useMemo } from 'react'
import type { FunctionComponent, FormEvent } from 'react'

interface CustomStyles {
  containerStyle?: string
  textAreaStyle?: string
  labelStyle?: string
}

export interface TextAreaProps {
  name: string
  value: string
  onChange: (e: FormEvent<HTMLTextAreaElement>) => void
  label: string
  customStyling?: CustomStyles
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  name,
  value,
  onChange,
  label,
  customStyling: { containerStyle, textAreaStyle, labelStyle } = {
    containerStyle: '',
    textAreaStyle: '',
    labelStyle: '',
  },
}) => {
  const [shrink, setShrink] = useState(false)

  const responsiveLabelStyles = useMemo(
    () =>
      shrink
        ? 'translate-y-3 scale-75 text-black bg-white px-2'
        : 'translate-y-6 scale-100 text-slate-500',
    [shrink]
  )

  return (
    <div className={`relative flex flex-col w-1/2 ${containerStyle}`}>
      <textarea
        name={name}
        className={`outline rounded-md p-1 px-2 ${textAreaStyle}`}
        value={value}
        onChange={onChange}
        onBlur={() => {
          if (!value.length) setShrink(false)
        }}
        onFocus={() => setShrink(true)}
      />
      <label
        className={`absolute pointer-events-none origin-top-left transition-transform left-3 -top-5 ${responsiveLabelStyles}`}
      >
        {label}
      </label>
    </div>
  )
}

export default TextArea
