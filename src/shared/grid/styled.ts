import { Children, ComponentProps } from 'react'
import { styled } from '@mui/material'

export type GridCProps = ComponentProps<typeof Grid>

export const Grid = styled('div')(({ theme, children }) => ({
  '--cell-padding': theme.spacing(1),
  '--border-color': theme.palette.divider,

  flex: 1,
  borderRadius: +theme.shape.borderRadius * 1.5,
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  display: 'grid',
  gridTemplateColumns: 'var(--template)',
  alignContent: 'start',
  padding: theme.spacing(0, 2, 2),
  overflow: 'auto',
  position: 'relative',
  transition: theme.transitions.create('min-height'),

  '&[data-collapse]': {
    gridColumn: '1 / -1',
    padding: 0,
    boxShadow: 'none',
    borderRadius: 0,
    height: 0,
    minHeight: 0,
  },

  '&[data-collapse="true"]': {
    minHeight: `calc(57px * ${Math.min(5, Children.count(children))})`,
  },
}))

export type GridRowProps = ComponentProps<typeof GridRow>

export const GridRow = styled('div')(({ theme }) => ({
  '--hidden': 0,
  display: 'contents',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'var(--template)',
  gap: theme.spacing(1),

  '&[data-head] > div': {
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0,
    background: theme.palette.background.paper,
    color: theme.palette.text.disabled,
    fontSize: 14,
    zIndex: 1,
  },

  ':where(:hover,:focus-within)': { '--hidden': 1 },

  ':hover:not(&[data-head]) > div': {
    background: theme.palette.action.hover,
  },

  '&[data-selected="true"] > div': {
    background: theme.palette.action.selected,
  },
}))

export type GridCellProps = ComponentProps<typeof GridCell>

export const GridCell = styled('div')({
  display: 'grid',
  gridAutoFlow: 'column',
  placeItems: 'center start',
  padding: 'var(--cell-padding)',
  borderBottom: '1px dashed',
  borderBottomColor: 'var(--border-color)',
  position: 'relative',
})
