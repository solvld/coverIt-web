import Edit from 'shared/assets/images/edit-image.svg?react'
import styled from 'styled-components'

interface EditButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SButton = styled.button`
  all: unset;
  cursor: pointer;
`

function EditButton({ ...rest }: EditButtonProps) {
  return (
    <SButton {...rest}>
      <Edit />
    </SButton>
  )
}

export default EditButton
