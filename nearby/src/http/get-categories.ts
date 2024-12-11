import { api } from './api-client'

export interface Category {
  id: string
  name: string
}

export function getCategories() {
  return api.get('categories').json<Category[]>()
}
