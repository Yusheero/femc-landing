<script setup></script>
<template>
  <div class="navigation">
    <button class="navigation__item">1</button>
    <button class="navigation__item">2</button>
    <button class="navigation__item">3</button>
    <button class="navigation__item">4</button>
    <button class="navigation__item">5</button>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.navigation {
  z-index: 2;
	position: absolute;
	left: 20px;
  top: calc(50vh - 208px);
  background: rgba(217, 217, 217, 0.50);
  backdrop-filter: blur(8px);
	border-radius: 16px;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 16px;
	@include geologica-700;
  padding: 16px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: #C46002;
    border-radius: 16px;
  }
}
</style>