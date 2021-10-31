<template>
  <Nuxt />
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-account-group',
          title: 'Наши мастера',
          to: '/master'
        },
        {
          icon: 'mdi-hair-dryer',
          title: 'Наши услуги',
          to: '/service'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Кудряшки'
    }
  }
}
</script>
