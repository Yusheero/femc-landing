<script setup></script>
<template>
  <div class="notification">
    Релиз версии 1.21.3 на всех серверах! Заходи!
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.notification {
	position: absolute;
	top: 20px;
	background-color: #C46002;
	padding: 15px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 6rem;
	@include geologica-700;
	font-size: 1.5rem;
}
</style>