<template>
  <div>
    <v-row>
      <v-flex
        v-for="item in masterItems"
        :key="item.id"
        xs12
        sm6
        md6
        lg4
        xl3
        py-2
        px-4
      >
        <v-card
          :to="{ name: 'master-slug', params: { slug: item.id } }"
        >
          <v-img
            height="400px"
            :src="item.src"
            class="align-end text-shadow"
          >
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-text>
              {{ item.position }}
            </v-card-text>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      masterItems: state => state.master.items
    })
  }
}
</script>
