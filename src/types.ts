export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface Car {
  id: string
  marka: string
  model: string
  price: string
  year: number
  engine: string
  horsepower: number
  transmission: 'manual' | 'automatic' | 'CVT' | 'robot'
  drive: 'front' | 'rear' | 'all'
  color: string
  mileage: number
}

export interface CurrencyInfo {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}

export interface CBApiResponse {
  Date: string
  PreviousDate: string
  Valute: Record<string, CurrencyInfo>
}
