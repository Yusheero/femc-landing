<script setup>
import MainContent from './components/slides/MainContent.vue';
import CelediaNewContent from './components/slides/CelediaNewContent.vue';
import CelediaOldContent from './components/slides/CelediaOldContent.vue';
import PawheraContent from './components/slides/PawheraContent.vue';
import Footer from './components/slides/Footer.vue';
import Navigation from './components/navigation/Navigation.vue';
</script>

<template>
  <main class="main">
    <Notification />
    <Navigation />
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
