<script setup>
const props = defineProps({
  title: String,
  image: String,
})
</script>
<template>
  <div class="rules-item">
    <img class="rules-item__image" :src="image" alt="">
    <h3 class="rules-item__text">{{ title }}</h3>
  </div>
</template>
<style scoped lang="scss">
@import '../../../style.scss';

.rules-item {
  padding: 16px;
  background: #ffffff;
  backdrop-filter: blur(8px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  @include rubik-600;
  color: #000000;

  &__image {
    width: 20px;
    height: 20px;
  }

  &__text {
    user-select: none;
  }
}
</style>