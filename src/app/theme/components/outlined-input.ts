import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      ':hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    }),

    error: ({ theme }) => ({
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error.main,
      },
    }),

    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
  },
} as Components<Theme>['MuiOutlinedInput']

// :focus ~ .MuiOutlinedInput-notchedOutline
