<script setup></script>
<template>
  <div class="advantages">
    <ul class="advantages__list">
      <li class="advantages__item">Стабильный и низкий пинг</li>
      <li class="advantages__item">Вариативность серверов</li>
      <li class="advantages__item">Актуальная версия</li>
      <li class="advantages__item">Сообщество игроков</li>
      <li class="advantages__item">Адекватная администрация</li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.advantages {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__item {
    background-color: #0f0f0f;
    padding: 0.8rem;
    border-radius: 8px;
    font-size: 1.3rem;
    color: #C46002;
    text-align: center;
  }
}
</style>