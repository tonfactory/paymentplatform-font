import { Components, Theme } from '@mui/material'

export default {
  variants: [
    {
      props: {},
      style: () => ({
        '&[data-loader]': {
          position: 'absolute',
          cursor: 'wait',
        },
      }),
    },
  ],
} as Components<Theme>['MuiBackdrop']
