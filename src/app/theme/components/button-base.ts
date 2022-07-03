import { Components, Theme } from '@mui/material'

export default {
  defaultProps: {
    disableRipple: true,
  },

  variants: [
    {
      props: { hidden: true },
      style: { display: 'none' },
    },
  ],
} as Components<Theme>['MuiButtonBase']
