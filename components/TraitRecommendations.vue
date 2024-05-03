<template>
  <div class="grid grid-flow-row grid-cols-3 gap-16">
    <TraitItem
      v-for="trait in traits"
      :key="trait.name"
      :trait="trait"
    />
  </div>
</template>

<script setup lang="ts">
import type { WeightedTrait } from '~/types'

defineProps<{
  traits: WeightedTrait[]
}>()
</script>
