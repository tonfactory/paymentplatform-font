import axios from "axios"
import { useEffect, useState } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

import { token } from "../auth/token"
import { serverUrl } from "../constants"


export const Account = () => {
  const [balance, setBalance] = useState<number>()
  const [wallet, setWallet] = useState<string>()

  useEffect(() => {
    axios
      .get(serverUrl + 'get_profile_wallet_info', {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
      })
      .then((res: any) => {
        if (res.data.length) {
          setBalance(res.data[1])
          setWallet(res.data[0])
        }
      })
  }, [])

  return (
    <Box m={10}>
       <Stack
          component="form"
          sx={{
            width: '55ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <Typography>
            <Typography color="text.secondary" component="span" mr={1}>
              Username:
            </Typography>
            {token.username}
          </Typography>
          {wallet && (
            <TextField
              label="Wallet Address"
              variant="standard"
              defaultValue={wallet}
              InputProps={{
                readOnly: true,
              }}
            />
          )}
          <Typography>
            Wallet Balance: {balance}
          </Typography>
          <Button variant="outlined" color="error" onClick={() => token.set('')}>Exit</Button>
      </Stack>
    </Box>
  )
}
