<template>
  <div class="grid grid-flow-col gap-2 grid-cols-3 items-center mb-8">
    <label
      for="min-attribute"
      class=" text-gray-900 dark:text-white"
    >{{ $t('results.filterMinValue') }}</label>
    <input
      id="min-attribute"
      v-model="model"
      required
      class="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="min-attribute"
      type="number"
      min="1"
      max="20"
    >
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number>({ required: true, default: 1 })
</script>
