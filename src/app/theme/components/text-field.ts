import { Components, Theme } from '@mui/material'

export default {
  defaultProps: {
    size: 'small',
  },
  variants: [
    {
      props: { type: 'color' },
      style: ({ theme }) => ({
        width: 22,
        height: 22,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        borderColor: 'transparent',

        ':hover, :focus-within': {
          borderColor: theme.palette.primary.light,
        },

        '& > div': { width: '150%', heigth: '150%' },
        input: { padding: 0 },
      }),
    },
    {
      props: { variant: 'outlined', 'data-inline': true },
      style: () => ({
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        '& .MuiInputAdornment-root': {
          visibility: 'hidden',
        },
        ':where(:hover,:focus-within) .MuiInputAdornment-root': {
          visibility: 'visible',
        },
      }),
    },
  ],
} as Components<Theme>['MuiTextField']
