export interface Property {
  id: number
  title: string
  type: string
  badge: string
  badgeColor?: 'gold' | 'navy' | 'green'
  price: string
  priceNote?: string
  location: string
  beds: number | null
  baths: number | null
  area: string
  listing: 'sale' | 'rent'
  region: 'north' | 'south'
  sellerType: string
  img: string
  featured?: boolean
}

export interface NavLink {
  label: string
  href: string
}
