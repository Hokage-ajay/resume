<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      EXPERIENCE
    </div>

    <div class="d-flex flex-column justify-start ga-2">
      <div
        class="d-flex flex-column"
        v-for="(section, index) in experience.sections"
        :key="index"
      >
        <div class="d-flex flex-column">
          <div class="text-h6 font-weight-medium text-primary">
            {{ section.company }}
          </div>
          <div class="text-body-2 d-inline-flex gc-1">
            {{ section.summary }}
          </div>
        </div>

        <div class="d-flex flex-column ga-2">
          <ExpCard
            v-for="pos in section.positions"
            :key="pos.title"
            :title="pos.title"
            :timeline="pos.timeline"
            :desc="pos.desc"
          />
        </div>

        <v-divider v-if="index < experience.sections.length - 1" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpCard from "./ExpCard.vue";
import { experience } from "../config/resumeConfig";
</script>

<style lang="scss" scoped>
.custom-timeline {
  row-gap: 10px !important;
}
</style>
