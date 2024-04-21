<template>
  <input
      type="checkbox"
      class="checkbox checkbox-sm checkbox-success"
      @change="checkboxHandle"
      name="checkbox-all"
      id="checkbox-all"
      :checked="isChecked"
  >
</template>
<script setup lang="ts">
import {Controllers} from "../../types/controllers.ts";
import {computed} from "vue";
const emits = defineEmits(['change'])
const props = defineProps<{
  data: Controllers[]
}>()

const isChecked = computed(() => props.data.every(value => value.select))

const checkboxHandle = () => {
  const result = props.data.map(item => ({ ...item, select: !isChecked.value }))
  emits('change', result)
}
</script>