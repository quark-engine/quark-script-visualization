<script setup lang="ts">
</script>

<template>
  <div class="bg-white flex-col w-72 grow overflow-y-hidden absolute border-solid border border-gray-300 z-2">
    <div class="flex flex-col text-black">
      <div class="h-12 w-full font-size-4 flex items-center gap-4 p-4 border-b-solid border-b border-gray-300 font-medium">
        <slot name="header">
        </slot>
      </div>
      <div class="grow overflow-hidden p-4 gap-4 flex flex-col">
        <slot name="body">
        </slot>
      </div>
    </div>

  </div>
</template>
