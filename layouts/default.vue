<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white sticky top-0 z-50">
      <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">Logo</NuxtLink>
        <nav class="hidden md:flex space-x-4">
          <NuxtLink to="/workspaces" class="hover:text-blue-200">Workspaces</NuxtLink>
          <button @click="logout" class="flex items-center hover:text-blue-200">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" />
            Logout
          </button>
        </nav>
        <button @click="toggleMobileMenu" class="md:hidden">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
    </header>

    <nav v-if="mobileMenuOpen" class="md:hidden bg-blue-500 text-white">
      <div class="container mx-auto px-4 py-2">
        <NuxtLink to="/workspaces" class="block py-2 hover:text-blue-200">Workspaces</NuxtLink>
        <button @click="logout" class="flex items-center py-2 hover:text-blue-200">
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" />
          Logout
        </button>
      </div>
    </nav>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const logout = () => {
  // Implement logout logic here
  navigateTo('/')
}
</script>