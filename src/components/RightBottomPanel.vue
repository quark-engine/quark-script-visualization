<script setup lang="ts">
import Panel from "@/components/Panel.vue";
import PanelTabHeader from "@/components/PanelTabHeader.vue";
import IconClipboard from "@/components/Icons/IconClipboard.vue";
</script>

<template>
  <Panel class="right-0 bottom-0 top-1/2">
    <template #header>
      <PanelTabHeader name="Preview" :active="true" />
      <IconClipboard size="20" />
    </template>
    <template #body>
    </template>
  </Panel>
</template>
