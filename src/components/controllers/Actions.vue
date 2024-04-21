<template>
  <Modal @closed="resetState">
    <template #trigger>
      <UiButton class="my-4 btn-success">Scan</UiButton>
    </template>

    <template #head>Subnet</template>

    <form class="card-body p-0" >
      <IpAddressInput
          v-for="(address, index) in ipAddresses"
          :key="index"
          v-model:networkStart="address.network[0]"
          v-model:networkEnd="address.network[1]"
          v-model:subnet="address.subnet"
          v-model:computer="address.computer"
      />
      <Button
          v-if="ipAddresses.length < 2"
          class="btn-success btn-sm"
          @click.prevent="addAddress()"
      >+</Button>
    </form>

    <template #footer="{close}">
      <Button class="btn-error my-4" @click.prevent="close()">Close</Button>
      <Button class="btn-success my-4" @click.prevent="submitForm">Scan</Button>
    </template>
  </Modal>
</template>
<script setup lang="ts">
import {defineComponent, ref} from "vue";
import UiButton from "../ui/Button.vue";
import Modal from "../ui/Modal.vue";
import Button from "../ui/Button.vue";
import IpAddressInput from "./IpAddressInput.vue";
const ipAddresses = ref([
  {
    network: [192, 168],
    subnet: 1,
    computer: 0,
  }
])
const addAddress = () => {
  ipAddresses.value.push({
    network: [192, 168],
    subnet: 1,
    computer: 0,
  })
}
const submitForm = () => {
  console.log(ipAddresses.value)
}
const resetState = () => {
  ipAddresses.value = [
    {
      network: [192, 168],
      subnet: 1,
      computer: 0,
    }
  ]
}
defineComponent({name: 'ControllerActions'})
</script>