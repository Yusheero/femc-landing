<script setup>
</script>
<template>
  <div class="stats-item">
    <img src="../images/stats-image.png" alt="">
    <div class="stats-item__info">
      <div class="stats-item__title">Название сервера</div>
      <div class="stats-item__text-online">Игроков онлайн</div>
      <div class="stats-item__text-version">Версия: </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../../style.scss';

.stats-item {
  padding: 16px;
  background: rgba(217, 217, 217, 0.30);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  @include rubik-600;
  color: #fff;

  &__title {
    font-size: 24px;
  }

  &__text-online {
    font-size: 16px;
    margin-bottom: 44px;
    @include rubik-500;
  }

  &__text-version {
    font-size: 16px;
    @include rubik-500;
  }
}
</style>