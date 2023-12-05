<script setup lang="ts">
import Panel from "@/components/Panel.vue";
import PanelTabHeader from "@/components/PanelTabHeader.vue";
</script>

<template>
  <Panel class="left-0 bottom-0 top-18">
    <template #header>
      <PanelTabHeader name="Script APIs" :active="true" />
      <PanelTabHeader name="CWE Examples" />
    </template>
    <template #body>
      <div v-for="i in 20">
        {{ 'API ' + i}}
      </div>
    </template>
  </Panel>
</template>
