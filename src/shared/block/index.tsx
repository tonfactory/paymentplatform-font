import { Typography, Paper, StackProps, Stack } from '@mui/material'

interface BlockProps extends StackProps {
  name: string
}

export const Block = (props: BlockProps) => (
  <Stack flex={1} gap={2} {...props}>
    <Typography variant="h2" color="text.disabled">
      {props.name}
    </Typography>
    <Paper sx={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
      {props.children}
    </Paper>
  </Stack>
)
