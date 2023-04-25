import { Theme } from '@resources/theme/theme.model'
import { Category } from '@resources/category/category.model'
import { Collection } from '@resources/collection/collection.model'
import { Format } from '@resources/format/format.model'

export interface IllustrationParams {
  perPage: number
}

export interface Illustration {
  _id: string
  label: string
  details: string
  category: Category
  collec: Collection
  theme: Theme
  formats: Format[]
  stock: number
  images: IllustrationImages
}

export interface IllustrationApiResponse {
  illustrations: Illustration[]
  maxItems: number
}

export interface IllustrationImages {
  settingScene: string
  packShot: string
  details: string[]
}
