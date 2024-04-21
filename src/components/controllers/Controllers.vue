<script setup lang="ts">
import {ref} from "vue";
import {ControllerHeaders, Controllers} from "../../types/controllers.ts";
import {controllerHeaders, controllers} from "../../assets/data/controllers.ts";
import UiTable from "../ui/Table.vue";
import CheckAll from "./CheckAll.vue";
import {statusClassNames} from "../../utils/status.ts";
import ControllerActions from "./Actions.vue";

const headers = ref<ControllerHeaders>(controllerHeaders)
const data = ref<Controllers[]>(controllers)
const changeCheckbox = ({id, select}: Controllers) => {
  data.value = data.value.map(elem => (elem.id === id) ? { ...elem, select: !select } : elem)
}
</script>

<template>
  <div class="controllers">
    <div class="controllers__actions">
      <ControllerActions />
    </div>
    <UiTable :headers="headers" :data="data">
      <template #header-select>
        <div class="flex gap-2">
          <CheckAll :data="data" @change="data = $event" />
          Select all
        </div>
      </template>
      <template #select="{entity}">
        <input
            class="checkbox checkbox-sm"
            type="checkbox"
            :checked="(entity as Controllers).select"
            @change="changeCheckbox(entity as Controllers)"
        >
      </template>
      <template #status="{entity}">
        <div class="flex justify-center">
          <div class="gap-2" :class="statusClassNames(entity.status)">
            {{ (entity as Controllers).status }}
          </div>
        </div>
      </template>
    </UiTable>
  </div>
</template>
