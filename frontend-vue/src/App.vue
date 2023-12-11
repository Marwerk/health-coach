<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gyms">Gyms</RouterLink>
        <RouterLink to="/testPost">PostTest</RouterLink> -->
      </nav>
  </header>


  <Suspense>
    <RouterView />
  </Suspense>

</template>

<style scoped>
</style>
