<script setup>
import StatsItem from './stats-item/StatsItem.vue';
</script>
<template>
  <div class="stats">
    <div class="stats__row">
      <StatsItem />
      <StatsItem />
      <StatsItem />
    </div>
    <div class="stats__row">
      <StatsItem />
      <StatsItem />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.stats {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__row {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
}
</style>