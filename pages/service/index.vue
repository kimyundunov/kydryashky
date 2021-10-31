<template>
<div>
  <div class="headers">
    <div class="title">
      Кудряшки
    </div>

    <Menu />

    <div class="lk"><a class="menua" href="#">Личный кабинет</a></div>
  </div>
  <div class="categories">
    <div class="categoryfirstdiv">
      <a class="astyle" href="service/hair">

        <p class="categorytext"><img src="~/static/master/HairStyle.jpg" class="categoryimg">Парикмахерские услуги</p>
      </a>
    </div>
    <div class="categorydiv">
      <a class="astyle" href="NailServices.html">

        <p class="categorytext"><img src="~/static/master/NailService.jpg" class="categoryimg">Ногтевой сервис</p>
      </a>
    </div>
    <div class="categorydiv">
      <a class="astyle" href="LashesServices.html">

        <p class="categorytext"><img src="~/static/master/LashService.jpg" class="categoryimg">Ресничный сервис</p>
      </a>
    </div>
    <div class="categorylastdiv">
      <a class="astyle" href="CareServices.html">

        <p class="categorytext"><img src="~/static/master/Care.jpg" class="categoryimg">Окрашивание / уход</p>
      </a>
    </div>
  </div>
  <a class="orderbut" href="RecordPage.html"><img src="/PM/Services/OrderButton.gif" alt="Записаться"></a>
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

<style lang="scss">
.categories{
    margin-top: -1%; 
}

.categoryfirstdiv{ /*Стиль первого блока категории*/
    width: 950px;
    border-bottom: dotted black;
    margin-left: 50px;
    padding-left: 475px;
}

.categorydiv{ /*Стиль категорий (кроме первой и последней)*/
    width: 950px;
    border-bottom: dotted black;
    margin-left: 50px;
    padding-left: 475px;
    margin-top: -2.5%;
    margin-bottom: -3%;
}

.categorylastdiv{ /*Стиль последнего блока категории*/
    width: 950px;
    margin-left: 50px;
    padding-left: 475px;
    margin-top: -2.5%;
    margin-bottom: -3%;
}

.astyle{ /*Стиль кнопок категорий*/
    margin-left: 300px;
    text-decoration: none;
}

.categorytext{ /*Стиль текста категорий услуг*/
    color: black;
    font-family: Cambria;
    font-size: 200%;
    font-weight: bold;
    text-decoration: none;
}

.categoryimg{ /*Стиль картинок категорий услуг*/
    vertical-align: middle;
}
</style>