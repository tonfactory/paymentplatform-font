import { Components, Theme } from '@mui/material'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    project: true
    toolbar: true
  }
}

export default {
  variants: [
    {
      props: { variant: 'project' },
      style: ({ theme }) => ({
        '--opacity': 0,
        boxShadow: theme.shadows[1],
        display: 'flex',
        flexDirection: 'column',
        minHeight: 210,
        padding: theme.spacing(3),
        position: 'relative',

        ':hover, :focus-within': {
          '--opacity': 1,
          boxShadow: theme.shadows[2],
        },

        '[data-edit-button]': {
          marginLeft: 'auto',
          opacity: 'var(--opacity)',
          transition: theme.transitions.create('opacity'),
        },

        form: {
          display: 'contents',
        },
      }),
    },
    {
      props: { variant: 'toolbar' },
      style: ({ theme }) => ({
        minWidth: 64,
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2, 0),
        borderRight: `1px solid ${theme.palette.divider}`,
      }),
    },
  ],
} as Components<Theme>['MuiPaper']
