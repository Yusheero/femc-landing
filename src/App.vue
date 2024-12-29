<script setup>
import MainContent from './components/slides/MainContent.vue';
import CelediaNewContent from './components/slides/CelediaNewContent.vue';
import CelediaOldContent from './components/slides/CelediaOldContent.vue';
import PawheraContent from './components/slides/PawheraContent.vue';
import Navigation from './components/navigation/Navigation.vue';
import Notification from './components/notification/Notification.vue';
import NewsContent from './components/slides/NewsContent.vue';
import SocialsBlock from './components/slides/SocialsContent.vue';
</script>

<template>
  <main class="main" >
    <Notification />
    <Navigation />
    <MainContent />
    <CelediaNewContent />
    <!-- <CelediaOldContent />  -->
    <!-- <PawheraContent /> -->
    <!-- <NewsContent /> -->
    <!-- <SocialsBlock /> -->
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
