<script setup>
defineProps({
  title: String,
})
</script>
<template>
  <div class="rules-item">
    <h3 class="rules-item__text">{{ title }}</h3>
  </div>
</template>
<style scoped lang="scss">
@import '../../../style.scss';

.rules-item {
  padding: 16px;
  background: rgba(217, 217, 217, 0.30);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  @include geologica-600;
  color: #fff;

  &__text {
    user-select: none;
  }
}
</style>