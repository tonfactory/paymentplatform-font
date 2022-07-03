import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { token } from '../auth/token'
import { serverUrl as SU } from "../constants"
import { ServiceT, EventT } from '../types'
import { getStatus } from '../utils'


export const Event = () => {
  let { eventId } = useParams()
  const [events , setEvents] = useState<EventT[]>([])
  const [services , setServices] = useState<ServiceT[]>([])
  const [channels , setChannels] = useState<any[]>([])
  const event = events.find((e: EventT) => e.id === parseInt(eventId || ''))

  useEffect(() => {
    axios.get(SU + "events/", {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => setEvents(res.data))
    axios.get(SU + "services/", {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => setServices(res.data))
    axios.get(SU + "channels/", {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => setChannels(res.data))
  }, [])

  const openSite = (site: string) => {
    axios.post(SU + "channels/", { event: event?.id }, {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => {
      if (res.status === 201) {
        window.open(site + '?' + res.data.uuid)
      }
    }).catch(() => {
      if (event?.id) {
        window.open(site + '?' + getStatus(event.id, channels).channel.uuid)
      }
    })

  }

  const stopChannel = (channel: any) => {
    axios.patch(SU + "channels/" + channel.id + "/", { status: 2 }, {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => {
      console.log(res);
    })
  }

  return !event ? <></> : (
    <Box sx={{ m: 10 }}>
      <Card sx={{ width: 845, height: 800 }}>
        <CardMedia
          component="img"
          height="340"
          image={event.thumbnail_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {event.title}
          </Typography>
          <Typography gutterBottom variant="body1">
            {event.description}
          </Typography>
          <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={6}>
              <Typography gutterBottom variant="body1" component="span" color="text.secondary">
                Status:
              </Typography>
              <Typography gutterBottom variant="body1" component="span" ml={1}>
                {getStatus(event.id, channels).status}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body1" component="span" color="text.secondary">
                Site:
              </Typography>
              <Typography gutterBottom variant="body1" component="span" ml={1}>
                {event.server_url}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom variant="body1" component="span" color="text.secondary">
                Max price:
              </Typography>
              <Typography gutterBottom variant="body1" component="span" ml={1}>
                {event.price}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 5 }} />
          <Typography gutterBottom variant="h6" component="span">
            Prices:
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Type Count</TableCell>
                  <TableCell align="center">Type Tariff</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.filter(s => s.event === parseInt(eventId || '')).map(service => (
                  <TableRow
                    key={service.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ color: 'black' }} component="th" scope="row">
                      {service.title}
                    </TableCell>
                    <TableCell sx={{ color: 'black' }} align="center">{service.type}</TableCell>
                    <TableCell sx={{ color: 'black' }} align="center">{service.type_count}</TableCell>
                    <TableCell sx={{ color: 'black' }} align="center">{service.type_tariff}</TableCell>
                    <TableCell sx={{ color: 'black' }} align="center">{service.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", mx: 2 }}>
          <Button sx={{ height: 30, width: 90 }} variant="outlined" color="success" size="small" onClick={() => stopChannel(getStatus(event.id, channels).channel)}>Stop</Button>
          <Button sx={{ height: 30, width: 90 }} variant="outlined" color="error" size="small" onClick={() => openSite(event.content_url)}>Start</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
