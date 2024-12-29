<script setup>
defineProps({
  text: Boolean,
})
</script>
<template>
  <a class="documentation" href="#">
    <img class="documentation__image" src="./images/vector.svg" alt="">
    <div v-if="text" class="documentation__text">Документация</div>
  </a>
</template>
<style lang="scss" scoped>
@import '../../style.scss';

.documentation {
  padding: 0 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: rgba(61, 61, 61, 50%);
  backdrop-filter: blur(6px);
  height: 50px;

  &__image {
    width: 20px;
    height: 25px;
  }

  &__text {
    @include minecraft;
    font-size: 18px;
    color: #fff;
  }
}
</style>