import { observer } from 'mobx-react-lite'
import * as Mui from '@mui/material'
// import { StateCheckbox } from 'features/checkbox'

interface Props {
  checkbox: any
  loading?: boolean
}

export const Checkbox = observer<Props>(({ checkbox, loading }) => (
  <Mui.Checkbox
    {...checkbox.props}
    icon={loading ? <Mui.CircularProgress size={20} /> : undefined}
  />
))
