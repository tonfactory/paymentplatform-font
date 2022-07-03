import { Components, Theme } from '@mui/material'

export default {
  defaultProps: {
    hover: true,
  },

  styleOverrides: {
    root: ({ theme }) => ({
      '--opacity': 0,
      transition: theme.transitions.create('background-color'),

      height: 48,

      ':hover, :focus-within': {
        '--opacity': 1,
      },

      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.action.hover,
      },

      '[data-remove-button]': {
        opacity: 'var(--opacity)',
        transition: theme.transitions.create('opacity'),
      },
    }),

    head: {
      height: 52,
    },
  },
} as Components<Theme>['MuiTableRow']
