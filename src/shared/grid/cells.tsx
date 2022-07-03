import { memo } from 'react'
import { GridCellProps as C, GridCell } from './styled'

export const Cells = memo<{ cells: C[] }>((props) => (
  <>
    {props.cells.map((cell) => (
      <GridCell {...cell} />
    ))}
  </>
))
