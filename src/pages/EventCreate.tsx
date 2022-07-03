import axios from "axios"
import {  useState } from "react"
import { Box, Button, Stack, TextField, FormGroup } from "@mui/material"
import { serverUrl as SU } from "../constants"
import { token } from "../auth/token"
import { ShortServiceT } from "../types"



export const EventCreate = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [serverUrl, setServerUrl] = useState('')
  const [contentUrl, setContentUrl] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [price, setPrice] = useState('')
  const [services, setServices] = useState<ShortServiceT[]>([])

  const send = () =>
    axios.post(SU + "events/", {
      title: name,
      description,
      "api_key": apiKey,
      "server_url": serverUrl,
      "content_url": contentUrl,
      "thumbnail_url": thumbnailUrl,
      "price": price,
      services
    }, {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => console.log(res))
  
  const addService = () => {
    setServices(prev => [...prev, {
      title: "",
      price: "",
      type: "",
      type_tariff: "",
      type_count: "",
      keyword: "",
    }])
  }

  const updateService = (index: number, key: string, value: string) => {
    const newServices: any = services
    newServices[index][key] = value
    setServices([...newServices])
  }

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
        <TextField label="Name" variant="filled" onChange={(evt) => setName(evt.target.value)}/>
        <TextField label="Description" variant="filled" onChange={(evt) => setDescription(evt.target.value)}/>
        <TextField label="API key" variant="filled" onChange={(evt) => setApiKey(evt.target.value)}/>
        <TextField label="Server URL" variant="filled" onChange={(evt) => setServerUrl(evt.target.value)}/>
        <TextField label="Content URL" variant="filled" onChange={(evt) => setContentUrl(evt.target.value)}/>
        <TextField label="Thumbnail URL" variant="filled" onChange={(evt) => setThumbnailUrl(evt.target.value)}/>
        <TextField label="Price" variant="filled" onChange={(evt) => setPrice(evt.target.value)}/>
      </Stack>
      <Button onClick={addService}>Add service</Button>
      {services.map((service, i) => (
        <FormGroup row key={i}>
          <TextField label="Title" variant="filled" onChange={(evt) => updateService(i, 'title', evt.target.value)} value={service.title} />
          <TextField label="Price" variant="filled" onChange={(evt) => updateService(i, 'price', evt.target.value)} value={service.price} />
          <TextField label="Type" variant="filled" onChange={(evt) => updateService(i, 'type', evt.target.value)} value={service.type} />
          <TextField label="Type Tariff" variant="filled" onChange={(evt) => updateService(i, 'type_tariff', evt.target.value)} value={service.type_tariff} />
          <TextField label="Type Count" variant="filled" onChange={(evt) => updateService(i, 'type_count', evt.target.value)} value={service.type_count} />
          <TextField label="keyword" variant="filled" onChange={(evt) => updateService(i, 'keyword', evt.target.value)} value={service.keyword} />
        </FormGroup>
      ))}
      <Button onClick={send}>Save</Button>
    </Box>
  )
}
