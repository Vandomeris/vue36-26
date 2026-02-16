<template>
  <header>
    <div>LOGO!</div>

    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/todos">Тудус</RouterLink>
    </nav>
  </header>

  <main><RouterView /></main>

  <footer></footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
