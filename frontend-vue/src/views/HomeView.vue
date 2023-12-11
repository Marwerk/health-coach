<script setup>
import logo from '@/assets/images/logo.svg'
</script>

<template>
  <header class="primary-header">
    <div class="container">
      <a href="#">
        <!-- Use require to resolve the path to your image -->
        <img :src="logo" alt="LogoPlaceholder" />
      </a>
      <nav class="primary-navigation"></nav>
    </div>
  </header>
</template>

