<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Workspaces</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="workspace in workspaces"
        :key="workspace.id"
        class="bg-white p-4 rounded shadow cursor-pointer hover:shadow-md transition-shadow"
        @click="navigateToBase(workspace.id)"
      >
        <h2 class="text-xl font-semibold">{{ workspace.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const workspaces = ref([
  { id: 1, name: 'Workspace 1' },
  { id: 2, name: 'Workspace 2' },
  { id: 3, name: 'Workspace 3' },
  { id: 4, name: 'Workspace 4' },
])

const navigateToBase = (workspaceId) => {
  navigateTo(`/bases/${workspaceId}`)
}
</script>