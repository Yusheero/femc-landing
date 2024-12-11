<script setup></script>
<template>
  <div class="notification">
    Релиз версии 1.21.3 на всех серверах!
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.notification {
	position: absolute;
	bottom: 16px;
	right: 16px;
	background: rgba(217, 217, 217, 0.50);
	backdrop-filter: blur(8px);
	border-radius: 8px;
	padding: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	@include geologica-700;
	font-size: 20px;
	color: #fff;
}
</style>