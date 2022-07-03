import { Observer, observer } from 'mobx-react-lite'
import { styled, Stack, StackProps } from '@mui/material'
import { StateNumbers as N } from 'features/numbers'

interface NumbersProps extends StackProps {
  numbers: N
}

const Num = styled('input')(({ theme }) => ({
  outline: 0,
  textAlign: 'center',
  fontSize: 20,
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: theme.palette.error.main,
  transition: theme.transitions.create('border-color'),

  '&[data-valid="true"]': {
    borderColor: theme.palette.success.main,
  },
}))

export const Numbers = observer<NumbersProps>(({ numbers, ...props }) => (
  <Stack direction={'row'} gap={1} m="auto" {...props}>
    {numbers.array.map((n) => (
      <Observer key={n.key}>
        {() => <Num {...n} data-valid={numbers.valid} />}
      </Observer>
    ))}
  </Stack>
))
