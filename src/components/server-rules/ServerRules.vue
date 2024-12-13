<script setup>
import RulesItem from './rules-item/RulesItem.vue';

defineProps({
  titles: Object,
})
</script>
<template>
  <div class="server-rules">
    <div v-for="title in titles">
      <RulesItem :title="title" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.server-rules {
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}
</style>