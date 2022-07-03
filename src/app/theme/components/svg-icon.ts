import { Components, Theme, Palette } from '@mui/material'

type Colors = Pick<Palette, 'success' | 'warning' | 'secondary' | 'info'>

function dataTypeStyles(type: string, theme: Theme, key: keyof Colors) {
  const { palette } = theme

  return {
    [`&[data-type="${type}" i]`]: {
      color: palette[key].main,
    },
  }
}

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      ...dataTypeStyles('audio', theme, 'warning'),
      ...dataTypeStyles('image', theme, 'secondary'),
      ...dataTypeStyles('text', theme, 'success'),
      ...dataTypeStyles('video', theme, 'info'),
    }),
  },
} as Components<Theme>['MuiSvgIcon']
