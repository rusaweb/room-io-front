<template>
  <div class="ui-input">
    <label :for="id">{{label}}</label>
    <input :type="type || 'text'" :name="name" :id="id" :class="inputClass + ' input input-bordered text-center dark:text-white'" v-model="model" v-bind="$attrs">
  </div>
</template>
<script setup lang="ts">
import {defineComponent} from "vue";

const model = defineModel()
defineProps<{
  id?: string,
  name: string,
  type?: string,
  inputClass?: string,
  label?: string
}>()
defineComponent({
  name: 'UiInput',
})
</script>