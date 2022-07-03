import { observer } from 'mobx-react-lite'
import {
  Backdrop,
  BackdropProps,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material'

interface Props extends Omit<BackdropProps, 'open'> {
  size?: CircularProgressProps['size']
  loader?: any
  open?: boolean
}

export const Loader = observer<Props>(({ loader, size, ...props }) => (
  <Backdrop
    data-loader
    open={Boolean(loader?.isOpen)}
    invisible
    unmountOnExit
    {...props}
  >
    <CircularProgress size={size} />
  </Backdrop>
))
