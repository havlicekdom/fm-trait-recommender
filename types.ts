export enum AttributeCategory {
  technical = 'technical',
  goalkeeping = 'goalkeeping',
  mental = 'mental',
  physical = 'physical',
}

export type Attribute = {
  name: string
  category: AttributeCategory
}

export type Trait = {
  name: string
  description: string
  category: TraitCategory
  dependsOn: Attribute['name'][]
}

export type WeightedTrait = Trait & { weight: number, min: number, max: number }

export enum TraitCategory {
  mental = 'Mental',
  technique = 'Technique',
  defensive = 'Defensive',
  passing = 'Passing',
  dribbling = 'Dribbling',
  finishing = 'Finishing',
  movement = 'Movement',
}

export type Player = {
  [key: Attribute['name']]: string
}
