<template>
  <div class="ui-table__container">
    <table class="ui-table table-zebra">
      <thead>
        <tr>
          <th
              v-resizable
              v-for="(header, i) in headers"
              :key="`${header}${i}`"
              class="column"
          >
            <slot v-if="$slots['header-' + i]" :name="'header-' + i" :entity="i" />
            <template v-else>
              {{header}}
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="(entity, index) in data"
            :key="`entity-${index}`"
        >
          <td
              v-for="([key], i) in Object.entries(headers)"
              :key="`${key}-${i}`"
          >
            <slot v-if="$slots[key]" :name="key" :entity="entity" />
            <template v-else>
              {{entity[key]}}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts" generic="T">
import {defineComponent} from "vue";
import resizable from "../../directives/resizable.ts";
const vResizable = resizable
defineComponent({
  name: 'UiTable'
})

defineProps<{
  headers: Record<string, T>,
  data: Record<string, T>[]
}>()
</script>