import { styled } from '@mui/material'

export const Textarea = styled('textarea')(({ theme }) => ({
  outline: 0,
  border: 0,
  resize: 'none',
  flex: 1,
  color: theme.palette.text.secondary,
  font: 'inherit',
}))
