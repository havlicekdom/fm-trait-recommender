<template>
  <div
    class="p-4 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white gap-2 grid grid-flow-row"
  >
    <h3 class="text-xl font-bold">
      {{ trait.name }}
    </h3>
    <h4 class="text-lg">
      {{ trait.category }}
    </h4>
    <p>{{ trait.description }}</p>
    <i18n-t
      tag="p"
      keypath="results.result"
      scope="global"
    >
      <template #weight>
        <span class="font-bold">{{ trait.weight }}</span>
      </template>
    </i18n-t>
    <i18n-t
      tag="p"
      keypath="results.min"
      scope="global"
    >
      <template #min>
        <span class="font-bold">{{ trait.min }}</span>
      </template>
    </i18n-t>
    <i18n-t
      tag="p"
      keypath="results.max"
      scope="global"
    >
      <template #max>
        <span class="font-bold">{{ trait.max }}</span>
      </template>
    </i18n-t>
  </div>
</template>

<script setup lang="ts">
import type { WeightedTrait } from '~/types'

defineProps<{
  trait: WeightedTrait
}>()
</script>
