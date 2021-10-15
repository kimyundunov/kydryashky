<template>
  <div class="d-flex justify-center align-center h-full">
    <v-btn
      outlined
      x-large
      color="#ffc0a6"
      @click="$router.push({ name: 'record' })"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Записаться онлайн
    </v-btn>
  </div>
</template>

<script>
export default {}
</script>
