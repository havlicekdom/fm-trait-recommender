import type { Player, Trait, WeightedTrait } from '~/types'
import { traits } from '~/config/traits'

export class RecommenderService {
  private player: Player

  constructor(player: Player) {
    this.player = player
  }

  recommendTraits(): WeightedTrait[] {
    return traits.map((trait) => {
      const valuesForTrait = this.getTraitWeightForPlayer(trait)

      return {
        ...trait,
        ...valuesForTrait,
      }
    }).sort((a, b) => b.weight - a.weight)
  }

  getTraitWeightForPlayer(trait: Trait): {
    weight: number
    min: number
    max: number
  } {
    let sum = 0
    let min = 20
    let max = 0

    trait.dependsOn.forEach((attribute) => {
      const attributeValue = parseInt(this.player[attribute.replaceAll(' ', '-')], 10)
      sum += attributeValue
      if (attributeValue > max) max = attributeValue
      if (attributeValue < min) min = attributeValue
    })

    return {
      weight: sum / trait.dependsOn.length,
      min,
      max,
    }
  }
}
