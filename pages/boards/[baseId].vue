<template>
  <div class="show-left-panel" @click="showLeftPanelHandle">    
      <font-awesome-icon :icon="['fas', 'angles-right']" class="w-4"/>
  </div>
  <div class="left-panel" ref="leftPanel" @blur="hideLeftPanelHandle" tabindex="0">
    <button class="btn-primary-outline create-new-board flex items-center justify-center">
      <font-awesome-icon :icon="['fas', 'plus']" class="w-3 mr-2"/>
    </button>
    <div class="list-boards">
      <div class="board ">
        <NuxtLink to="/" class="flex">
          <font-awesome-icon :icon="['fas', 'table-list']" class="w-3 mr-2"/> <p>Boards name</p>
        </NuxtLink>
          <font-awesome-icon :icon="['fas', 'ellipsis']" class="w-3 mr-2"/>
      </div>
      <div class="board ">
        <NuxtLink to="/" class="flex">
          <font-awesome-icon :icon="['fas', 'table-list']" class="w-3 mr-2"/> <p>Boards name</p>
        </NuxtLink>
          <font-awesome-icon :icon="['fas', 'ellipsis']" class="w-3 mr-2"/>
      </div>
      <div class="board ">
        <NuxtLink to="/" class="flex">
          <font-awesome-icon :icon="['fas', 'table-list']" class="w-3 mr-2"/> <p>Boards name</p>
        </NuxtLink>
          <font-awesome-icon :icon="['fas', 'ellipsis']" class="w-3 mr-2"/>
      </div>
      <div class="board ">
        <NuxtLink to="/" class="flex">
          <font-awesome-icon :icon="['fas', 'table-list']" class="w-3 mr-2"/> <p>Boards name</p>
        </NuxtLink>
          <font-awesome-icon :icon="['fas', 'ellipsis']" class="w-3 mr-2"/>
      </div>
    </div>
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
      class="stripe row-border order-column responsive nowrap"
      :options="{
        responsive: true,
        searching: false,
        paging: false,
        lengthMenu: [20, 50, 100],
        scrollY: '300px',
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: true,
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
const leftPanel = ref('')

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

const showLeftPanelHandle = (e)=>{
  console.log(e.target)
  e.target.classList.add("-left-14")
  leftPanel.value.classList.add("show")
  leftPanel.value.focus()
}

const hideLeftPanelHandle = (e)=>{
  leftPanel.value.classList.remove('show')
}

</script>
<style scoped>
.show-left-panel{
  @apply w-10 bg-white p-2 absolute top-16 left-0 border-gray-300 border rounded-r-full flex justify-end;
}

.left-panel{
  @apply h-screen w-[75%] bg-white z-50 absolute top-14 shadow-xl drop-shadow-xl px-4 py-8 flex flex-col gap-3 -left-[75%] outline-none
    transition-all
  ;
}

.show{
  @apply left-0;
}

.list-boards{
  @apply flex flex-col gap-2;
}

.board{
  @apply px-2 py-2 rounded-md hover:bg-[#5500ff11] flex  justify-between;
}

.create-new-board{
  @apply mx-auto w-full;
}
</style>