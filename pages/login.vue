<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Access Token Entry</h1>
    <form @submit.prevent="submitToken">
      <div class="mb-4">
        <label for="accessToken" class="block mb-2">Enter Access Token</label>
        <input
          id="inputAccessToken"
          v-model="inputAccessToken"
          type="password"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" class="btn-primary px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
    <p v-if="error" class="text-red-600 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
const inputAccessToken = ref(null)
const accessToken = ref(null)
const error = ref('')

const submitToken = () => {
  if (inputAccessToken.value) {    
    const accessToken = useCookie('accessToken')
    accessToken.value = inputAccessToken.value
    navigateTo('/')
  } else {
    error.value = 'Invalid access token. Please try again.'
  }
}
</script>