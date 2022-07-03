import { FC } from 'react'
import { Navigate, NavigateProps, To } from 'react-router-dom'

export interface ReplaceProps extends Omit<NavigateProps, 'to'> {
  to?: To
}

export const Replace: FC<ReplaceProps> = ({
  replace = true,
  to = '',
  ...rest
}) => <Navigate replace={replace} to={to} {...rest} />
