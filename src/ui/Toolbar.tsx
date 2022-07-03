import { observer } from 'mobx-react-lite'
import { Paper, Stack, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Logo from '../assets/logo.svg'
import { ChProps } from '../types'


export const Toolbar = observer<ChProps>((props) => {
  const navigate = useNavigate()

  return (
    <Paper variant={'toolbar'}>
      <img  src={Logo} width="80%" />
      <Stack
        component={'nav'}
        alignSelf={'stretch'}
        mt={8}
        sx={{
          '--active-color': ({ palette }) => palette.primary.main,
          a: { height: 40 },
        }}
      >
        {props.children}
      </Stack>
      <Avatar sx={{ mt: 'auto' }} onClick={() => navigate("/account/", { replace: true })}>
        U
      </Avatar>
    </Paper>
  )
})

