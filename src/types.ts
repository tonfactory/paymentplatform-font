import { FC, ReactNode } from 'react'


export interface ChProps {
  children?: ReactNode
}

export type FCC<P = {}> = FC<P & ChProps>

export type EventT = {
  id: number
  title: string
  price: number
  api_key: string
  content_url: string
  description: string
  server_url: string
  thumbnail_url: string
}

export type GetStatusT = {
  status: "READY" | "STARTED" | "CLOSED" | "EMPTY"
  color: "info" | "success" | "warning" | "secondary"
  channel: any
}

export type ServiceT = {
  id: number,
  event: number,
  title: string,
  price: number,
  type: string,
  type_tariff: string,
  type_count: string,
  keyword: string,
}

export type ShortServiceT = {
  title: string,
  price: string,
  type: string,
  type_tariff: string,
  type_count: string,
  keyword: string,
}