<script setup>
import MainContent from './components/MainContent.vue';
import CelediaNewContent from './components/CelediaNewContent.vue';
import CelediaOldContent from './components/CelediaOldContent.vue';
import PawheraContent from './components/PawheraContent.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main class="main">
    <MainContent />
    <CelediaNewContent />
    <CelediaOldContent />
    <PawheraContent />
    <Footer />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
