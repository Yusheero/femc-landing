<script setup></script>
<template>
  <div class="navigation">
    <button class="navigation__item"></button>
    <button class="navigation__item"></button>
    <button class="navigation__item"></button>
    <button class="navigation__item"></button>
    <button class="navigation__item"></button>
    <button class="navigation__item"></button>
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
	border-radius: 8px;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 16px;
	@include geologica-700;
  padding: 12px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: #A7A7A7;
    border-radius: 8px;
    border: none;
  }
}
</style>