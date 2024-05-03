import type { Player, Trait, WeightedTrait } from '~/types'
import { traits } from '~/config/traits'

export class RecommenderService {
  private player: Player

  constructor(player: Player) {
    this.player = player
  }

  recommendTraits(minAttributeValue: number): WeightedTrait[] {
    return traits.reduce<WeightedTrait[]>((array, trait) => {
      const valuesForTrait = this.getTraitWeightForPlayer(trait, minAttributeValue)

      if (valuesForTrait) {
        array.push({
          ...trait,
          ...valuesForTrait,
        })
      }

      return array
    }, []).sort((a, b) => b.weight - a.weight)
  }

  getTraitWeightForPlayer(trait: Trait, minAttributeValue: number): {
    weight: number
    min: number
    max: number
  } | undefined {
    let sum = 0
    let min = 20
    let max = 0

    trait.dependsOn.forEach((attribute) => {
      const attributeValue = parseInt(this.player[attribute.replaceAll(' ', '-')], 10)
      sum += attributeValue
      if (attributeValue > max) max = attributeValue
      if (attributeValue < min) min = attributeValue
    })

    if (min < minAttributeValue) return

    return {
      weight: sum / trait.dependsOn.length,
      min,
      max,
    }
  }
}
