import { GetStatusT } from "../types";


export const getStatus = (event: number, channels: any): GetStatusT => {
  const channel = channels.find((ch: any) => ch.event === event)
  const st = parseInt(channel?.status)
  switch (st) {
    case 0 : return { status: "READY", color: "info", channel };
    case 1 : return { status: "STARTED", color: "success", channel };
    case 2 : return { status: "CLOSED", color: "warning", channel };
    default : return { status: "EMPTY", color: "secondary", channel };
  }
}