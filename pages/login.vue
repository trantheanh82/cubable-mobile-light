<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Access Token Entry</h1>
    <form @submit.prevent="submitToken">
      <div class="mb-4">
        <label for="accessToken" class="block mb-2">Enter Access Token</label>
        <input
          id="accessToken"
          v-model="accessToken"
          type="password"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
    <p v-if="error" class="text-red-600 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
const accessToken = ref('')
const error = ref('')

const submitToken = () => {
  // Simulating token validation (replace with actual API call)
  if (accessToken.value === 'valid_token') {
    navigateTo('/workspaces')
  } else {
    error.value = 'Invalid access token. Please try again.'
  }
}
</script>