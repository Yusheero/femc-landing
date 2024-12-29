<script setup>
const props = defineProps({
  title: String,
  text: String,
  image: String,
})
</script>
<template>
  <div class="rules-item">
    <img class="rules-item__image" :src="image" alt="">
    <div class="rules-item__inner">
      <h2 class="rules-item__title">{{ title }}</h2>
      <h2 class="rules-item__text">{{ text }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../../style.scss';

.rules-item {
  padding: 16px;
  background: rgb(29, 29, 29, 75%);
  border: #ffffff solid 1px;
  backdrop-filter: blur(8px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @include minecraft;
  color: #ffffff;
  width: 290px;

  &__image {
    width: 80px;
    height: 80px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }

  &__title {
    font-size: 22px;
    font-weight: 500;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>