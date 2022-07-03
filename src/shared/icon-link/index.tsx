import { observer } from 'mobx-react-lite'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { styled, SxProps } from '@mui/material'
import { IconKey, renderIcon } from '../icon'

export interface IconLinkProps extends NavLinkProps {
  icon: IconKey
  sx?: SxProps
}

const StyledLink = styled(NavLink)(({ theme }) => ({
  display: 'grid',
  color: theme.palette.text.disabled,

  ':where(:hover,:focus,.active)': {
    color: `var(--active-color, ${theme.palette.text.secondary})`,
  },

  '&[data-disabled="true"]': {
    pointerEvents: 'none',
  },
}))

export const IconLink = observer<IconLinkProps>(({ icon, ...props }) => (
  <StyledLink {...props} children={renderIcon(icon)} />
))
