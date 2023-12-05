<script setup lang="ts">
import IconArrowLeftAngle from "@/components/Icons/IconArrowLeftAngle.vue";
import IconArrowRightAngle from "@/components/Icons/IconArrowRightAngle.vue";
import IconZoomIn from "@/components/Icons/IconZoomIn.vue";
import IconZoomOut from "@/components/Icons/IconZoomOut.vue";
import IconZoomToFit from "@/components/Icons/IconZoomToFit.vue";
</script>

<template>
  <div class="absolute left-72 top-18 bottom-0 right-72 text-white z-1">
    <div
        class="h-12 w-full font-size-4 flex items-center justify-between p-4 border-b-solid border-b border-gray-300 font-medium bg-white text-black">
      <div class="flex items-center gap-2">
        <div class="border-solid border rounded-md p-1">
          <IconArrowLeftAngle size="20"/>
        </div>
        <div class="border-solid border rounded-md p-1">
          <IconArrowRightAngle size="20"/>
        </div>
        <div class="text-gray-700">
          saved 3 mins ago
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="border-solid border rounded-md p-1">
          <IconZoomOut size="20"/>
        </div>
        <div class="border-solid border rounded-md p-1">
          <IconZoomToFit size="20"/>
        </div>
        <div class="border-solid border rounded-md p-1">
          <IconZoomIn size="20"/>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
