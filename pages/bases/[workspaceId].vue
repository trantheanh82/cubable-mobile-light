<template>
  <div>
    <div class="flex items-center mb-4">
      <button @click="$router.back()" class="mr-4">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <h1 class="text-2xl font-bold">Bases</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="base in bases"
        :key="base.id"
        class="bg-white p-4 rounded shadow cursor-pointer hover:shadow-md transition-shadow"
        @click="navigateToTableDetails(base.id)"
      >
        <h2 class="text-xl font-semibold">{{ base.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const workspaceId = route.params.workspaceId

const bases = ref([
  { id: 1, name: 'Base 1' },
  { id: 2, name: 'Base 2' },
  { id: 3, name: 'Base 3' },
  { id: 4, name: 'Base 4' },
])

const navigateToTableDetails = (baseId) => {
  navigateTo(`/table-details/${baseId}`)
}
</script>