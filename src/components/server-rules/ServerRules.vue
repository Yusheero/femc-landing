<script setup>
import RulesItem from './rules-item/RulesItem.vue';

const props = defineProps({
  rulesData: Object,
})

</script>
<template>
  <div class="server-rules">
    <div v-for="rule in rulesData" :key="rule.id">
      <RulesItem :title="rule.title" :image="rule.imagePath"/>
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