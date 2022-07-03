import { Components, Theme, createTheme } from '@mui/material'

import palette from '../palette'


const { transitions, spacing } = createTheme()

export default {
  styleOverrides: `
  ::-webkit-scrollbar {
    width: ${spacing(1)};
    height: ${spacing(1)};
  }
  ::-webkit-scrollbar-track  {
    background: ${palette.background.default};
  }

  ::-webkit-scrollbar-thumb {
    background: ${palette.text.disabled};
    border-radius: ${spacing(1)};
    border: 2px solid ${palette.background.default}; 
  }

  a {
    outline: 0;
    color: inherit;
    text-decoration: none;
    transition: ${transitions.create('color')};
    display: inline-grid;
    place-content: center;
  }

  [data-hidden="true"] {
    opacity: var(--hidden);
  }

  `,
} as Components<Theme>['MuiCssBaseline']
