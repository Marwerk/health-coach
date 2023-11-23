<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      gyms: [],
      error: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/api/gyms')
      this.gyms = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<template>
  <div id="app">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="gym in gyms" :key="gym.id">
        {{ gym.attributes.name }}
      </li>
    </ul>
  </div>
</template>