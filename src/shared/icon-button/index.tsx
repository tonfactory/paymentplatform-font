import * as Mui from '@mui/material'
import { IconKey, renderIcon } from '../icon'

export interface IconButtonProps extends Mui.IconButtonProps {
  icon: IconKey
  loading?: boolean
  ['data-remove-button']?: boolean | null
  ['data-edit-button']?: boolean | null
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  loading,
  ...props
}) => (
  <Mui.IconButton
    {...props}
    children={loading ? <Mui.CircularProgress size={20} /> : renderIcon(icon)}
  />
)
