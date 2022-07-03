import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottom: '1px dashed',
      borderColor: theme.palette.divider,
      color: theme.palette.text.disabled,
    }),

    head: ({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(0.5),
      whiteSpace: 'nowrap',
    }),

    body: ({ theme }) => ({
      ...theme.typography.body1,
      padding: theme.spacing(0.375, 0.5),
    }),

    stickyHeader: ({ theme }) => ({
      background: theme.palette.background.paper,
    }),
  },
} as Components<Theme>['MuiTableCell']
