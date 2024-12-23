<script setup>
</script>
<template>
  <section id="socials" class="socials-content">
    <div class="block">
      <div class="block__title">SOCIALS</div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.socials-content {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-image: url('../../assets/images/background.jpg');
  @include rubik-700;
  color: #fff;
  font-size: 32px;
}

.block {
  @include rubik-700;
  color: #fff;
  background: rgba(217, 217, 217, 0.50);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &__title {
    font-size: 26px;
  }

  &__subtitle {
    color: #b80000;
    font-size: 18px;
  }
}
</style>