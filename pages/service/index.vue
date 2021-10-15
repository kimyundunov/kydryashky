<template>
  <div>
    <v-expansion-panels
      v-model="expansion"
      focusable
      multiple
    >
      <v-expansion-panel
        v-for="item in serviceItems"
        :key="item.id"
      >
        <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="mt-2">
            <v-row
              v-for="child in item.services"
              :key="child.id"
            >
              <v-col
                sm="9"
              >
                {{ child.name }}
              </v-col>
              <v-col
                sm="3"
                class="text-right"
              >
                {{ child.price }} &#8381;
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      expansion: [0, 1]
    }
  },
  computed: {
    ...mapState({
      serviceItems: state => state.service.items
    })
  }
}
</script>
