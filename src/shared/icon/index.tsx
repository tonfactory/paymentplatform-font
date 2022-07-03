import { observer } from 'mobx-react-lite'
import { SvgIconProps } from '@mui/material'

import * as icons from './icons'

type K = keyof typeof icons
export type IconKey = K | Lowercase<K>

export interface IconProps extends SvgIconProps {
  icon?: IconKey | Lowercase<IconKey>
  ['data-type']?: string
}

export const renderIcon = (icon: IconKey, props: SvgIconProps = {}) => {
  const SvgIcon = icons[icon.toUpperCase() as K]
  return <SvgIcon {...props} />
}

export const Icon = observer<IconProps>(({ icon, ...props }) =>
  icon ? renderIcon(icon, props) : null
)
