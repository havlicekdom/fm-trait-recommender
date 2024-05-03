<template>
  <div>
    <h1 class="text-2xl mb-8">
      {{ $t('results.header') }}
    </h1>
    <TraitFilter
      v-model="minValue"
      class="max-w-md"
    />
    <TraitRecommendations :traits="traits" />
  </div>
</template>

<script setup lang="ts">
import { RecommenderService } from '~/services/recommender.service'

const { query } = useRoute()
const decoded = atob(query.attributes?.toString() ?? '')
const searchParams = new URLSearchParams(decoded)
const player = Object.fromEntries(searchParams.entries())

const minValue = ref(1)

const recommenderService = new RecommenderService(player)
const traits = computed(() => recommenderService.recommendTraits(minValue.value))
</script>
