<template>
  <div class="min-h-screen flex flex-col">
    <header class="top-0 z-50 shadow-xl">
      <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold"><img src="/image/pwa_cubable_235x.png" alt="Cubable Logo" width="40"/>
          </NuxtLink>
        <nav class="hidden md:flex space-x-4">
          <NuxtLink to="/" class="hover:text-blue-200">Bases</NuxtLink>
          <button @click="logout" class="flex items-center hover:text-blue-200">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" />
            Logout
          </button>
        </nav>
        <button @click="toggleMobileMenu" class="md:hidden">
          <font-awesome-icon :icon="['fas', 'bars']" class="w-5" />
        </button>
      </div>
    </header>

    <nav v-if="mobileMenuOpen" class="md:hidden bg-blue-500 text-white">
      <div class="container mx-auto px-4 py-2">
        <NuxtLink to="/" class="block py-2 hover:text-blue-200">Bases</NuxtLink>
        <button @click="logout" class="flex items-center py-2 hover:text-blue-200">
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" />
          Logout
        </button>
      </div>
    </nav>

    <main class="flex-grow container mx-auto py-8" :class="{'px-4': route.path == '/login' || route.path == '/' }">
      <slot />
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const pageInPadding = [
  '/login',
  '/'
]

const logout = () => {
  // Implement logout logic here
  navigateTo('/')
}
</script>