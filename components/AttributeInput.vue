<template>
  <div class="grid grid-flow-col gap-2 grid-cols-3 items-center">
    <label
      :for="attribute.name"
      class=" text-gray-900 dark:text-white"
    >{{ $t(`attributes.${attribute.name}`) }}</label>
    <input
      :id="attribute.name"
      required
      class="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :name="attribute.name"
      type="number"
      min="1"
      max="20"
    >
  </div>
</template>

<script setup lang="ts">
import type { Attribute } from '~/types'

defineProps<{
  attribute: Attribute
}>()
</script>
