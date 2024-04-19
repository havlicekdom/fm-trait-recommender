<template>
  <form action="/results" class="w-full" @submit.prevent="handleSubmit($event)">
    <p class="text-lg mb-4">{{ $t('index.description') }}</p>
    <div class="grid grid-flow-col gap-4 mb-4">
      <div :key="category.name" v-for="category in categoriesWithAttributes">
        <h3 class="text-xl mb-2">{{ $t(`categories.${category.name}`) }}</h3>
        <div class="grid grid-flow-row gap-2">
          <AttributeInput
            v-for="attribute in category.attributes"
            :key="attribute.name"
            :attribute="attribute"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { attributesList } from '~/config/attributes'
import type { AttributeCategory, Attribute } from '~/types'

const categoriesWithAttributes = computed<
  {
    name: AttributeCategory
    attributes: Attribute[]
  }[]
>(() => {
  return attributesList.reduce((r, a) => {
    r[a.category] = r[a.category] || {
      name: a.category,
      attributes: [],
    }
    r[a.category].attributes.push(a)
    return r
  }, Object.create(null))
})

const handleSubmit = async (event: Event) => {
  const formData = new FormData((event.target as HTMLFormElement))
  // @ts-expect-error
  const encoded = btoa(new URLSearchParams(formData).toString())

  await navigateTo({
    path: '/results',
    query: {
      attributes: encoded,
    },
  })
}
</script>
