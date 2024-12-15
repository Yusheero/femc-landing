<script setup>
</script>
<template>
  <section class="news-cards">
    <div class="news-cards__card">1</div>
    <div class="news-cards__card">2</div>
    <div class="news-cards__card">3</div>
    <div class="news-cards__card">4</div>
    <div class="news-cards__card">5</div>
    <div class="news-cards__card">6</div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.news-cards {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  gap: 10px;

  &__card {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
}
</style>