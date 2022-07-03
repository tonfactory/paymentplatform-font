import { observer } from 'mobx-react-lite'
import { Stack } from '@mui/material'
import { useRoutes } from 'react-router-dom'

import { token } from '../auth/token'
import * as Page from '../pages'
import { Toolbar } from '../ui/Toolbar'
import { IconLink, Replace } from '../shared'

const Navigation = () => (
  <>
    <IconLink to="/" icon="home" />
    <IconLink to="/events/create" icon="add" />
  </>
)

const Auth = observer(() => (
  <Stack direction={'row'} height={'100vh'}>
    <Toolbar>
      <Navigation />
    </Toolbar>
    {useRoutes([
      { path: 'account', element: <Page.Account /> },
      { path: 'events', element: <Page.Events /> },
      { path: 'events/:eventId', element: <Page.Event /> },
      { path: 'events/create', element: <Page.EventCreate /> },
      { path: '*', element: <Replace to="/events" /> },
      { index: true, element: <Replace to="/events" /> },
    ])}
  </Stack>
))


export const App = observer(() => (token.access ? <Auth /> : <Page.Login />))

export default App
