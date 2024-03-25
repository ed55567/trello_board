<script setup lang="ts">
import type { Column } from "~/types";
import { nanoid } from "nanoid";
const columns = ref<Column[]>([
 {
  id: nanoid(),
  title: "Backlog",
  tasks: [{
id: nanoid(), title: "Create landing page", 
createdAt: new Date(),
 }],
 },
 {
  id: nanoid(),
  title: "Backlog",
  tasks: [{
id: nanoid(), title: "Create landing page", 
createdAt: new Date(),
 }],
 },
 {
  id: nanoid(),
  title: "Backlog",
  tasks: [{
id: nanoid(), title: "Create landing page", 
createdAt: new Date(),
 }],
 },
 { title: "Selected for dev", id: nanoid(), tasks: [] },
 { title: "In Progess", id: nanoid(), tasks: [] },
 { title: "QA", id: nanoid(), tasks: [] },
 { title: "Complete", id: nanoid(), tasks: [] },
]);
</script>

<template>
    <div class="flex gap-4 overflow-auto">
    <div v-for="column in columns" :key="column.id">
      <header>
        {{ column.title }}
      </header>
        <p v-for="task in column.tasks" :key="task.id">
        {{ task.title }}
        </p> 
    </div>
 </div>
</template>