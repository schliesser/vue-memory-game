export enum IStatus {
  READY = 'READY',
  PLAYING = 'PLAYING',
  PASSED = 'PASSED',
  WAITING = 'WAITING',
}

export const ALL_CARD_NAMES = [
  'Auto_Hupe',
  'Vorhang_zuziehen',
  'Geschirr_zerschlagen',
  'Klopfen_Holztuere',
  'Schulklingel',
  'Getraenkedose_oeffnen',
  'Laub_fegen',
  'Streichholz',
  'Wasserglas_einschenken',
  'Fahrradklingel',
  'Donner',
  'Schiffanker',
  'Internet_Modem',
  'Sense_schaerfen',
  'Moped',
  'Kuh',
] as const

export type ICardName = typeof ALL_CARD_NAMES[number]

export interface ICard {
  id: string
  flipped: boolean
  name: ICardName
}

export interface IState {
  nonMatchedPairs: number
  highestRecord: number
  status: IStatus
  cards: ICard[]
  timeCost: number
}
