import { Components, Theme, Palette } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    TEXT: true
    AUDIO: true
  }
}

type Colors = Pick<Palette, 'success' | 'warning' | 'secondary' | 'info'>

function dataTypeStyles(type: string, theme: Theme, key: keyof Colors) {
  const { palette } = theme

  return {
    [`&[data-type="${type}" i]`]: {
      background: palette[key].light,
      color: palette[key].main,

      '&[data-active="false"]': {
        background: palette.action.hover,
      },

      ':hover, :focus': {
        color: palette[key].dark,
        background: palette[key].light,
      },

      ':disabled': {
        color: palette.action.disabled,
        background: palette.action.disabledBackground,
      },
    },
  }
}

export default {
  defaultProps: {
    disableElevation: true,
  },

  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
      minWidth: 'max-content',
      ...dataTypeStyles('audio', theme, 'warning'),
      ...dataTypeStyles('image', theme, 'secondary'),
      ...dataTypeStyles('text', theme, 'success'),
      ...dataTypeStyles('video', theme, 'info'),
    }),

    containedPrimary: ({ theme }) => ({
      ':focus:not(::disabled)': {
        background: theme.palette.primary.dark,
      },
    }),

    text: ({ theme }) => ({
      color: theme.palette.text.secondary,

      ':hover, :focus': {
        color: theme.palette.text.primary,
        background: theme.palette.action.hover,
      },
    }),

    outlined: ({ theme }) => ({
      '&[data-type="audio" i]': {
        background: theme.palette,
      },
    }),
  },
  variants: [
    {
      props: { tabIndex: -1 },
      style: { pointerEvents: 'none' },
    },
  ],
} as Components<Theme>['MuiButton']
