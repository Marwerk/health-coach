<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      allCategories: [],
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      error: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/api/categories')
      this.allCategories = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:1337/api/gyms', this.modifiedData)
        console.log(response);
      } catch (error) {
        this.error = error;
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <div v-if="error">
      {{ error }}
    </div>

    <form id="form" v-on:submit="handleSubmit" v-else>
      <label for="name">Name</label>
      <input id="name" v-model="modifiedData.name" type="text" name="name">

      <label for="description">Description</label>
      <input id="description" v-model="modifiedData.description" type="text" name="description">

      <div>
        <br />
        Select categories
        <div v-for="category in allCategories" :key="category.id">
          <label>{{ category.name }}</label>
          <input type="checkbox" :value="category.id" v-model="modifiedData.categories" name="categories"
            :id="category.id" />
        </div>
      </div>

      <input type="submit" value="Submit">
    </form>

  </div>
</template>