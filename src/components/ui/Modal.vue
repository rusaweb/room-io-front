<template>
  <div @click="open()" >
    <slot name="trigger" />
  </div>
  <Teleport to="body">
    <div class="modal" :class="{'modal-open': isOpen}">
      <div class="modal__wrapper" @click.prevent="close"></div>
      <div class="modal__body">
        <div class="modal__head">
          <slot name="head" />
        </div>
        <div class="modal__content">
          <slot />
        </div>
        <div class="modal__footer">
          <slot name="footer" :close="close"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ref} from "vue";
const emits = defineEmits(['closed'])
const isOpen = ref(false)
const open = () => {
  isOpen.value = true
  window.addEventListener("keydown", handleKeyboard)
}
const close = () => {
  isOpen.value = false
  window.removeEventListener("keydown", handleKeyboard)
  emits('closed')
}

const handleKeyboard = (event: KeyboardEvent) => {
  if (event.keyCode === 27) {
    close()
  }
}
</script>