<script setup lang="ts">
import Panel from "@/components/Panel.vue";
import PanelTabHeader from "@/components/PanelTabHeader.vue";
</script>

<template>
  <Panel class="right-0 bottom-1/2 top-18">
    <template #header>
      <PanelTabHeader name="Info" :active="true" />
    </template>
    <template #body>
      <div v-for="i in 5">
        {{ 'Feature ' + i}}
      </div>
    </template>
  </Panel>
</template>
