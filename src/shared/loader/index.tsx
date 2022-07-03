import { observer } from 'mobx-react-lite'
import {
  Backdrop,
  BackdropProps,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material'
import { StateLoader } from 'features/loader'

interface Props extends Omit<BackdropProps, 'open'> {
  size?: CircularProgressProps['size']
  loader?: Pick<StateLoader, 'isOpen'>
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
