<template>
  <div class="card bg-base-100 shadow-xl p-4 my-2">
    <div class="font-bold indent-2 dark:text-white">IP - адрес</div>
    <div class="flex gap-2 flex-wrap items-center">
      <UiInput
          name="address-first"
          inputClass="input-sm w-20"
          v-model="networkStart"
      /> .
      <UiInput
          name="address-second"
          inputClass="input-sm w-20"
          v-model="networkEnd"
      /> .
      <UiInput
          name="address-third"
          inputClass="input-sm w-20"
          value="1"
          v-model="subnet"
      /> .
      <UiInput
          name="address-fourth"
          inputClass="input-sm w-20"
          v-model="computer"
          disabled
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import UiInput from "../ui/Input.vue";
const networkStart = defineModel('networkStart')
const networkEnd = defineModel('networkEnd')
const subnet = defineModel('subnet')
const computer = defineModel('computer')
</script>