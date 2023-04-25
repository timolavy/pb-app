import { Format } from '@resources/format/format.model'

export interface BasketItem {
  _id: string
  label: string
  format: Format
  image: string
  quantity: number
}