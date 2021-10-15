<template>
  <div>
    <h1>Запись</h1>
    <section>
      <v-form class="my-4">
        <v-row wrap>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-text-field
              v-model="form.name"
              label="ФИО*"
              placeholder="Введите ФИО"
            />
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-text-field
              v-model="form.phone"
              v-mask="'+# (###) ### ## ##'"
              label="Телефон*"
              placeholder="Введите номер"
            />
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-select
              v-model="form.genre"
              label="Пол*"
              :items="[{ text: 'Женский', value: 'female'}, { text: 'Мужской', value: 'male' }, { text: 'Другой', value: 'other' }]"
              placeholder="Выберите пол"
            />
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-autocomplete
              v-model="form.master"
              label="Мастер*"
              :items="masterItems"
              item-text="name"
              item-value="id"
              placeholder="Выберите мастера"
            />
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-autocomplete
              v-model="form.procedure"
              label="Процедура*"
              :items="getChildServiceItems"
              item-text="name"
              item-value="id"
              placeholder="Выберите процедуру"
            />
          </v-flex>
          <v-flex
            xs12
            sm12
            md6
            lg6
            xl3
            px-2
          >
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Дата"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                locale="ru"
                no-title
                min-date
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>
        </v-row>
      </v-form>
    </section>
    <v-row
      class="px-2"
      justify="end"
    >
      <v-btn
        color="success"
      >
        Записаться
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        genre: '',
        master: '',
        procedure: ''
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
    }
  },
  computed: {
    ...mapState({
      masterItems: state => state.master.items,
      serviceItems: state => state.service.items
    }),
    getChildServiceItems() {
      const arr = []
      this.serviceItems.forEach((item) => {
        if (item.services && item.services.length) {
          item.services.forEach((v) => {
            arr.push(v)
          })
        }
      })
      return arr
    }
  }
}
</script>