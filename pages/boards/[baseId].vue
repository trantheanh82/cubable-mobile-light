<template>
  <div class="left-panel">

  </div>
  <div class="show-left-panel w-16 bg-white p-2 absolute top-16 left-0 border-gray-100 rounded-r-full flex items-end">
    <font-awesome-icon :icon="['fas', 'border-none']" />
  </div>
  <div>
    <div class="flex items-center mb-4">
      <button @click="$router.back()" class="mr-4">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
    </div>
    <DataTable
      :columns="columns"
      :data="rows"
      class="display responsive nowrap"
      :options="{
        responsive: true,
        scrollX: true,
        pageLength: 20,
        lengthMenu: [20, 50, 100],
      }"
    >
      <template #checkbox="{ row }">
        <input type="checkbox" v-model="row.selected" />
      </template>
    </DataTable>
    <button
      v-if="hasMoreRows"
      @click="loadMore"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
    >
      Load More
    </button>
  </div>
</template>

<script setup>
import { DataTable } from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-dt'

DataTable.use(DataTablesCore)

const route = useRoute()
const baseId = route.params.baseId

const columns = [
  { data: 'selected', title: '', orderable: false, searchable: false, defaultContent: '' },
  { data: 'name', title: 'Name' },
  { data: 'column1', title: 'Column 1' },
  { data: 'column2', title: 'Column 2' },
  { data: 'column3', title: 'Column 3' },
  { data: 'column4', title: 'Column 4' },
  { data: 'column5', title: 'Column 5' },
]

const rows = ref([])
const hasMoreRows = ref(true)
const currentPage = ref(1)

const loadRows = async () => {
  // Simulating API call
  const newRows = Array.from({ length: 20 }, (_, i) => ({
    id: rows.value.length + i + 1,
    name: `Item ${rows.value.length + i + 1}`,
    column1: `Value ${Math.floor(Math.random() * 100)}`,
    column2: `Value ${Math.floor(Math.random() * 100)}`,
    column3: `Value ${Math.floor(Math.random() * 100)}`,
    column4: `Value ${Math.floor(Math.random() * 100)}`,
    column5: `Value ${Math.floor(Math.random() * 100)}`,
    selected: false,
  }))

  rows.value.push(...newRows)
  currentPage.value++

  if (currentPage.value > 5) {
    hasMoreRows.value = false
  }
}

const loadMore = () => {
  loadRows()
}

const createNew = () => {
  console.log('Create new item')
  // Implement create new functionality
}

onMounted(() => {
  loadRows()
})
</script>