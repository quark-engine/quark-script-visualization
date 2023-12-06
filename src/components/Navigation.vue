<script setup lang="ts">
import IconGithub from "@/components/Icons/IconGithub.vue";
import IconTwitterX from "@/components/Icons/IconTwitterX.vue";
import IconDoc from "@/components/Icons/IconDoc.vue";

const ICON_SIZE = "28";
const QUARK_DOCS_LINK = "https://quark-engine.readthedocs.io/en/latest/index.html";
const QUARK_GITHUB_LINK = "https://github.com/quark-engine/quark-engine";
const QUARK_X_LINK = "https://twitter.com/quarkengine";
</script>

<template>
<div class="flex gap-4 items-center">
  <a :href="QUARK_DOCS_LINK" target="_blank" class="flex"><IconDoc :size="ICON_SIZE" /></a>
  <a :href="QUARK_GITHUB_LINK" target="_blank"><IconGithub :size="ICON_SIZE" /></a>
  <a :href="QUARK_X_LINK" target="_blank"><IconTwitterX :size="ICON_SIZE" /></a>
</div>
</template>
