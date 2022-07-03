import { forwardRef } from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { IconProps, renderIcon } from '../icon'

export interface ButtonProps extends MuiButtonProps {
  startIcon?: IconProps['icon']
  endIcon?: IconProps['icon']
  datatype?: IconProps['icon']
}

export const Button = forwardRef<null, ButtonProps>(
  ({ startIcon, endIcon, datatype, ...props }, ref) => (
    <MuiButton
      ref={ref}
      component={props.tabIndex === -1 ? 'span' : 'button'}
      startIcon={startIcon && renderIcon(startIcon)}
      endIcon={endIcon && renderIcon(endIcon)}
      children={datatype && renderIcon(datatype)}
      data-type={datatype || null}
      {...props}
    />
  )
)
