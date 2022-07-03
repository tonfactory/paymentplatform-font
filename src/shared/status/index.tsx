import * as Mui from '@mui/material'
import { renderIcon } from '../icon'
import { observer } from 'mobx-react-lite'

type Props = Pick<Mui.ButtonProps, 'disabled' | 'onClick' | 'sx'>

export interface DatasetStatusProps extends Props {
  status: number
  loading?: boolean
}

const play = renderIcon('PLAY', { color: 'primary' })
const pause = renderIcon('PAUSE', { color: 'disabled' })

const statuses = [
  ['инициализация', null],
  ['подготовка', play],
  ['пауза', play, 'text.primary'],
  ['разметка', pause, 'info.main'],
  ['завершён', null, 'primary.main'],
  ['выгружен', play],
] as const

const Root = Mui.styled(Mui.ButtonBase)(({ theme }) => ({
  display: 'inline-grid',
  gridTemplate: `". ." auto / 1fr 24px`,
  textAlign: 'right',
  gap: theme.spacing(1.5),
  color: theme.palette.text.disabled,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,

  ':hover, :focus': {
    background: theme.palette.action.hover,
  },
}))

export const Status = observer<DatasetStatusProps>(
  ({ status, loading, ...props }) => {
    const [text, icon, color] = statuses[status]

    return (
      <Root {...props}>
        <Mui.Typography component="span" variant="body1" color={color}>
          {text}
        </Mui.Typography>
        {loading ? <Mui.CircularProgress size={20} /> : icon}
      </Root>
    )
  }
)
