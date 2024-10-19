<template>
  <div>
    <div class="flex items-center mb-4">
      <button @click="$router.back()" class="mr-4">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <h1 class="text-2xl font-bold">Row Details</h1>
    </div>
    <n-card>
      <n-descriptions bordered>
        <n-descriptions-item v-for="(value, key) in rowData" :key="key" :label="key">
          {{ value }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-button class="mt-4" type="primary" @click="editRow">Edit</n-button>
  </div>
</template>

<script setup>
import { NCard, NDescriptions, NDescriptionsItem, NButton } from 'naive-ui'

const route = useRoute()
const rowId = route.params.rowId

// Simulating fetching row data
const rowData = ref({
  id: rowId,
  name: `Item ${rowId}`,
  column1: `Value ${Math.floor(Math.random() * 100)}`,
  column2: `Value ${Math.floor(Math.random() * 100)}`,
  column3: `Value ${Math.floor(Math.random() * 100)}`,
  column4: `Value ${Math.floor(Math.random() * 100)}`,
  column5: `Value ${Math.floor(Math.random() * 100)}`,
})

const editRow = () => {
  console.log('Edit row', rowId)
  // Implement edit functionality
}
</script>