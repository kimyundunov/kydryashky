<template>
  <div>
    <v-img
      :src="item.src"
      height="400px"
      width="280px"
      style="display: inline-block"
    ></v-img>
    <div>
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      masterItems: state => state.master.items
    }),
    item() {
      return this.masterItems.find(v => v.id + '' === this.$route.params.slug + '')
    }
  }
}
</script>
