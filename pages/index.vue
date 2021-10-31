/* eslint-disable */
<template>
  <div>
    <body>
  <div class="headers">
    <div class="title">
        Кудряшки
    </div>

    <ul class="menu">                      <!-- Маркированный список меню -->
        <li>
          <nuxt-link class="menua" to="/">Записаться онлайн</nuxt-link>
        </li>
        <li>
          <nuxt-link class="menua" to="/service">Услуги</nuxt-link>
        </li>  
        <li>
          <nuxt-link class="menua" to="/">Наши мастера</nuxt-link>
        </li>     <!-- Пункты меню -->
        <li>
          <nuxt-link class="menua" to="/">Акции</nuxt-link>
        </li>  
        <li>
          <nuxt-link class="menua" to="/">Контакты</nuxt-link>
        </li>  
        <li>
          <nuxt-link class="menua" to="/">Записаться онлайн</nuxt-link>
        </li>
    </ul>

    <div class = "lk"><a class="menua" href="#">Личный кабинет</a></div>
</div>
  <div class="background">
  <div class="gifDiv"></div>
  <div class="order">
    <h1 class="orderheader" align="center">Онлайн-запись</h1>
    <form method="post" action="RecordPage.html" name="OrdrerForm"><p class="inputField">ФИО <input class="inputfieldName" name="FIO" type="text" placeholder="Например: Анна" v-model="form.name"/></p>
      <p class="inputField">Телефон <input v-model="form.phone" class="inputfieldPhone" name="Phone" type="text" placeholder="Например: 89187743614"/></p>
      <p class="inputField">Пол <select class="inputfieldGender" name="Gender" v-model="form.gender"><option>Не выбран</option><option value="woman">Женский</option><option value="man">Мужской</option></select></p>
      <p class="inputField">Категория<br>процедуры <select v-model="form.category" class="inputfieldCategory" id="category_id" name="Category"><option value="0">Не выбрана</option><option value="1">Парикмахерские услуги</option><option value="2">Ногтевой сервис</option><option value="3">Ресничный сервис</option><option value="4">Окрашивание / уход</option></select></p>
      
      <p class="inputField">Процедура
        <select v-model="form.procedure" class="inputfieldService" id="service_id" disabled> <!--Начало блока с определением услуг в соответствии с категорией-->
          <option value="0" style="display: none">Не выбрана</option>
        </select>
      </p> <!--/*Конец блока с определением услуг в соответствии с категорией-->
      <p class="inputField">Мастер
        <select class="inputfieldMaster" v-model="form.master">
          <option>Не выбран</option>
          <option>Яна Некула</option>
          <option>Инна Жидкова</option>
          <option>Екатерина Гордеева</option>
          <option>Мила Лебедева</option>
          <option>Анна Михайловская</option>
          <option>Екатерина Шушакова</option>
          <option>Евгения Мельникова</option>
        </select>
      </p>
      <p class="inputField">Дата <input v-model="form.date" class="inputfieldDate" name="Date" type="date" /></p>
    </form>
    <input class="button" value="Записаться" @click="onSubmit"></div></div>

<div id="Success" class="SuccessPopup">

  <div>
    <a href="#close" title="Закрыть" class="close"><i>X</i></a>
      <p align="center">Спасибо, запись произведена, позднее мы перезвоним Вам для подтверждения</p>
    </div>
  </div>
</body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        gender: '',
        category: '',
        procedure: '',
        master: '',
        date: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 550px) { /*Адаптация блока с гифкой на странице записи*/
    .gifDiv {display: none;}
    .Order {position: relative; margin: auto}
}

.gifDiv { /*Блок с гифкой на странице записи*/
    background: url(/PM/Services/Background.gif);
    background-size: contain;
    background-repeat: no-repeat;
    height: 900px;
    position: fixed;
    top: 14%;
    left: 0;
    width: 67%;
    margin-left: -0.5%;
    margin-right: -0.5%;
}

.background{/*Блок за гифкой*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    white-space: nowrap;
    background: black;
}

.order{ /*Блок "Записаться онлайн*/
    background: rgba(214,209,214, 0.7);
    position: fixed;
    top: 14%;
    right: 1%;
    width: 33%;
    min-width: 450px;
    height: 610px;
    border-radius: 20px;
}

.orderheader{ /*Текст "Записаться онлайн"*/
    font-family: 'Monotype Corsiva';
    font-size: 40px;
    font-weight: lighter;
}

.inputfieldName{ /*Поле ввода ФИО*/
    width: 220px;
    padding: 1%;
    margin-left: 17%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldPhone{/*Поле ввода телефона*/
    width: 220px;
    padding: 1%;
    margin-left: 11%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldGender{/*Выпадающий список пола*/
    width: 232px;
    padding: 1%;
    margin-left: 19.5%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldCategory{/*Выпадающий список категории услуг*/
    width: 232px;
    padding: 1%;
    margin-left: 7%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldService{/*Выпадающий список услуг*/
    width: 234px;
    padding: 1%;
    margin-left: 7%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldMaster{/*Выпадающий список мастеров*/
    width: 232px;
    padding: 1%;
    margin-left: 13.5%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

.inputfieldDate{/*Поле ввода даты*/
    width: 220px;
    padding: 1%;
    margin-left: 19%;
    border: ridge darkslateblue 2px;
    border-radius: 15px;
    background-color: #dcdcdc;
    font-family: Cambria;
    font-size: 70%;
}

@media screen and (max-width: 550px) { /*Адаптация блока с гифкой на странице записи*/
    .gifDiv {display: none;}
    .Order {position: relative; margin: auto}
}

/*.content {
    display: block;
}*/

.gifDiv { /*Блок с гифкой на странице записи*/
    background: url('~/static/Background.gif');
    background-size: contain;
    background-repeat: no-repeat;
    height: 900px;
    position: fixed;
    top: 14%;
    left: 0;
    width: 67%;
    margin-left: -0.5%;
    margin-right: -0.5%;
}



.button{ /*Кнопка "Записаться" на странице записи*/
    color: white;
    background-color: #64c264;
    height: 10%;
    width: 70%;
    border-radius: 15px;
    border: inset darkgreen;
    margin-left: 15%;
    margin-top: 3%;
    font-size: 25px;
    font-family: Cambria;
}
.button:hover{ /*Стиль текста на кнопке "Записаться" на страницы записи*/
    color: darkslategrey;
    cursor: pointer;
}

.inputField { /*Поля ввода в форме записи на странице записи*/
    padding-left: 8%;
    padding-top: 0;
    font-size: 20px;
    font-weight: normal;
}

.SuccessPopup { /*Отображение окна успешной записи на странице записи*/
    position: fixed;
    font-family: "Monotype Corsiva";
    font-size: 200%;
    top: -10%;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    display: none;
    pointer-events: none;
    align-self: center;
}
.SuccessPopup:target {/*Вывод блока успешной записи на странице записи*/
    display: block;
    pointer-events: auto;
}

.SuccessPopup > div { /*Блок окна успешной записи на странице записи*/
    width: 30%;
    position: relative;
    margin-top: 20%;
    margin-left: 30%;
    margin-right: 15%;
    padding: 5px 5px 5px 20px;
    border-radius: 10px;
    background: lavender;
}

.close {/*Стиль кнопки "Х" окна успешной записи на странице записи*/
    background: #606061;
    color: white;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -moz-box-shadow: 1px 1px 3px black;
    -webkit-box-shadow: 1px 1px 3px black;
    box-shadow: 1px 1px 3px black;
    font-family: sans-serif;
    font-size: 50%;
}

.close:hover { background: lavender; color: black} /*Стиль кнопки "Х" при фокусе на странице записи*/

</style>