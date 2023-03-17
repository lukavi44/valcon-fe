import { Author, AuthorBookDetails } from './author.model'

export interface BookItemList {
  items: BookBodyDataGet[]
  count: number
}

export interface BookBodyData {
  Id: number
  Title: string
  Description: string
  Isbn: string
  Quantity: number
  Cover: Blob
  PublishDate: string
  AuthorIds: Author[]
}

export interface BookBodyDataGet {
  Id: number
  Title: string
  Available: number
  Description: string
  Isbn: string
  Quantity: number
  Cover: string
  PublishDate: string
  Authors: Author[]
}

export interface BookDetailsRequest {
  Id: number
  Title: string
  Available: number
  Description: string
  Isbn: string
  Quantity: number
  Cover: string
  PublishDate: Date
  Authors: AuthorBookDetails[]
}
