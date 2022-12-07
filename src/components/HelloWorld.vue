<script setup lang="ts">
import { ref } from 'vue'
import demo from './demo'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <demo msg="tsx"></demo>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
