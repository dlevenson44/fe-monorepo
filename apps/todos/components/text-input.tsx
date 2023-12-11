'use client'
import { useMemo, useState } from 'react'
import type { FunctionComponent, FormEvent } from 'react'

interface CustomStyles {
  containerStyle?: string
  inputStyle?: string
  labelStyle?: string
}

export interface TextInputProps {
  name: string
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  label: string
  customStyling?: CustomStyles
}

const TextInput: FunctionComponent<TextInputProps> = ({
  name,
  value,
  onChange,
  label,
  customStyling: { containerStyle, inputStyle, labelStyle } = {
    containerStyle: '',
    inputStyle: '',
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
      <input
        type="text"
        name={name}
        className={`outline-dotted rounded-md w-full p-1 ${inputStyle}`}
        value={value}
        onChange={onChange}
        onBlur={() => {
          if (!value.length) setShrink(false)
        }}
        onFocus={() => setShrink(true)}
      />
      <div
        className={`absolute rounded-sm pointer-events-none origin-top-left transition-transform -top-5 left-3 ${responsiveLabelStyles} ${labelStyle}`}
      >
        <label>{label} 555</label>
      </div>
    </div>
  )
}

export default TextInput
