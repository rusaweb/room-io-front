<template>
  <button class="ui-button btn text-white"><slot /></button>
</template>
<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({name: 'UiButton'})
</script>