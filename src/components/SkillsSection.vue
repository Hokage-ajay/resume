<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100">SKILLS</div>

    <div class="d-flex flex-column justify-start ga-2">
      <SkillCard heading="Coding languages" :skills="skills.codingLanguages" />
      <v-divider />

      <SkillCard heading="Operating System" :skills="skills.os" />
      <v-divider />

      <SkillCard heading="Scheduling Tools" :skills="skills.st" />
      <v-divider />

      <SkillCard heading="Administration Tools" :skills="skills.admin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from "./SkillCard.vue";
import { skills } from "../config/resumeConfig";
</script>
