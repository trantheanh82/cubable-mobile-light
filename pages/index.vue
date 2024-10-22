<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Bases</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="base, idx in bases"
        :key="idx"
        class="card-bases"
        @click="navigateToBase(`${base.id}`)"        
      >
        <div class="bg-black/20 backdrop-blur-md p-5 min-h-[50px]">
          <p>{{ base.name }}</p>
        </div>  

      </div>
    </div>
    
  </div>
</template>

<script setup>

const {data:bases, pending, error} = await useFetch('/api/cubable/get-bases',{
  transform: (data)=>{
    return data.bases.data
  }
})

const navigateToBase = (baseID) => {
  navigateTo(`/boards/detail?baseID=${baseID}`)
}

definePageMeta({
  middleware: ['token']
})
</script>
<style scoped>
.card-bases{
  @apply rounded shadow-md cursor-pointer hover:shadow-md transition-shadow bg-[url('/image/bases.svg')] min-h-[250px] bg-no-repeat bg-cover flex flex-col justify-end rounded-lg;
}
</style>