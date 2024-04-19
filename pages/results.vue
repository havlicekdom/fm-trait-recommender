<template>
  <h1>{{ $t('results.header') }}</h1>
</template>

<script setup lang="ts">
const { query } = useRoute()
const decoded = atob(query.attributes)
const searchParams = new URLSearchParams(decoded)

const recommendedTraits = recommenderService.recommendTraits(searchParams)
</script>