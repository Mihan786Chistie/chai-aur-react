import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref){
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
    </div>
  )
})

export default Input