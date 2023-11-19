import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length <= 1) return;

    onAddCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
