<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  name: string;
  active: boolean;
}>(), {
  active: false,
});

const styleClass = computed(() => props.active ? 'text-black' : 'text-gray-300 hover:text-gray-500');
</script>

<template>
  <div class="cursor-default" :class="styleClass">
    {{ name }}
  </div>
</template>
