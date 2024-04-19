export enum AttributeCategory {
  technical = 'technical',
  goalkeeping = 'goalkeeping',
  mental = 'mental',
  physical = 'physical'
}

export type Attribute = {
  name: string
  category: AttributeCategory
}

export type Trait = {
  name: string
  dependsOn: Attribute[]
}