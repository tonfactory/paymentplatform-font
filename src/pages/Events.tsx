import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { token } from '../auth/token'
import { serverUrl as SU } from "../constants"
import { EventT } from '../types'
import { getStatus } from '../utils/parsers'


export const Events = () => {
  const [events , setEvents] = useState<EventT[]>([])
  const [channels , setChannels] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(SU + "events/", {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => setEvents(res.data))
    axios.get(SU + "channels/", {
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access}
    }).then(res => setChannels(res.data))
  }, [])

  return (
    <Grid container spacing={2} sx={{ m: 20 }}>
      {!events.length ? <>No one Event</> : events.map(event => (
        <Grid item xs={2} key={event.id}>
          <Card sx={{ maxWidth: 345, height: 340 }}>
            <CardMedia
              onClick={() => navigate("/events/" + event.id, { replace: true })}
              component="img"
              height="140"
              image={event.thumbnail_url}
              alt="green iguana"
            />
            <CardContent sx={{ height: 140 }}>
              <Typography gutterBottom variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", mx: 2 }}>
              <Button fullWidth sx={{ height: 30, width: 60 }} variant="outlined" color={getStatus(event.id, channels).color} size="small">
                {getStatus(event.id, channels).status}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
