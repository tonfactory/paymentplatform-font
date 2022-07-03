import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import {
  ProviderFormLogin,
  StateFormLogin,
  useFetchFormLogin,
  useFormLogin,
} from '../auth/form-login'
import { Loader, Fields } from '../shared'
import axios from 'axios'
import { serverUrl } from '../constants'
import { token } from '../auth/token'

const SubmitButton = observer(() => {
  const login = useFormLogin()
  useFetchFormLogin(login)

  const loginPost = () => {
    axios.post(serverUrl + 'api/token/', {
      username: login.fields.values[0],
      password: login.fields.values[1],
    })
      .then((res: any) => {
        token.set(res.data.access)
        token.setUsername(login.fields.values[0])
        login.loader.close()
      })
  }

  return (
    <Button
      children={'Login'}
      disabled={login.disabled}
      onClick={(e) => {
        e.preventDefault()
        loginPost()
      }}
      type={'submit'}
      variant={'contained'}
    />
  )
})

export const FormLogin = () => {
  const { fields, loader } = useFormLogin()

  return (
    <Box
      component="form"
      alignSelf={'start'}
      display={'grid'}
      gap={2}
      gridTemplateColumns={'1fr'}
      position={'relative'}
      sx={{ div: { gridColumn: '1 / -1' } }}
    >
      <Fields fields={fields} display={'contents'} />
      {/* <Button>recovery password</Button> */}
      <SubmitButton />
      <Loader loader={loader} />
    </Box>
  )
}

export const Login = () => (
  <Box
    height={'90vh'}
    display={'grid'}
    alignItems={'center'}
    justifyItems={'center'}
  >
    <Typography variant={'login'}>TON Payment Platform</Typography>
    <ProviderFormLogin value={new StateFormLogin()}>
      <FormLogin />
    </ProviderFormLogin>
  </Box>
)
