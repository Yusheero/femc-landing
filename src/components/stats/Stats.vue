<script setup></script>
<template>
  <div class="stats">
    <div class="stats__block">Users</div>
    <div class="stats__block">Online</div>
    <div class="stats__block">Version</div>
    <div class="stats__block">Status</div>
    <div class="stats__block">Status</div>
    <div class="stats__block">Status</div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.stats {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(3, 180px);
  gap: 1rem;

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #999;
    border-radius: 8px;
  }
}
</style>