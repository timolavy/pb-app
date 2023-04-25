import {Theme} from '@resources/theme/theme.model'

export interface Collection {
  _id: string
  label: string
  description: string
  theme: Theme
  collaboration: boolean
  collaborationDescription?: string
  images: {
    home: string
    collections: string
    details: string[]
  }
}
