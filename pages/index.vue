<script setup lang="ts">
const { $api } = useNuxtApp()
const userRepo = repository($api)
const { data } = await useAsyncData(() => userRepo.get())

</script>
<template>
  <div>
    <h1>Users</h1>
    {{ data }}
  </div>
</template>