<template>
  <div class="card bg-base-100 shadow-xl p-4 my-2">
    <div class="font-bold indent-2 dark:text-white">IP - адрес</div>
    <div class="flex sm:gap-2 gap-1 flex-wrap items-center">
      <UiInput
          name="address-first"
          inputClass="input-sm sm:w-20 w-[65px]"
          v-model="networkStart"
      />.
      <UiInput
          name="address-second"
          inputClass="input-sm sm:w-20 w-[65px]"
          v-model="networkEnd"
      />.
      <UiInput
          name="address-third"
          inputClass="input-sm sm:w-20 w-[65px]"
          value="1"
          v-model="subnet"
      />.
      <UiInput
          name="address-fourth"
          inputClass="input-sm sm:w-20 w-16"
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