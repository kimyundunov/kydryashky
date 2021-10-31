<template>
  <div>
    <div class="headers">
      <div class="title">
        Кудряшки
      </div>

      <Menu />

      <div class="lk"><a class="menua" href="#">Личный кабинет</a></div>
    </div>
    <div class="mainheader">
      <p class="mainheadertext" align="center">Стрижки</p>
    </div>
    <div class="servicediv">
      <table class="servicesprice" width="100%" cellpadding="10">
        <tr>
          <td>Чёлка</td>
          <td align="right">300 ₽</td>
        </tr>
        <tr>
          <td>Женская стрижка</td>
          <td align="right">от 700 ₽</td>
        </tr>
        <tr>
          <td>Мужская стрижка</td>
          <td align="right">от 500 ₽</td>
        </tr>
        <tr>
          <td>Подравнивание кончиков</td>
          <td align="right">300 ₽</td>
        </tr>
        <tr>
          <td>Полировка</td>
          <td align="right">500 ₽</td>
        </tr>
      </table>

      <a class="orderbut" href="RecordPage.html"><img src="/PM/Services/OrderButton.gif" alt="Записаться"></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*
.menu-main { /*Верхнее меню на всех страницах*
    z-index: 9999;
    list-style: none;
    padding: 25px 0 5px;
    text-align: center;
    text-decoration: lavender;
    background-color: black;
    height: 7%;
    border-bottom: double white;
    position: fixed;
    top: 0;
    z-index: 1;
    margin-top: -1%;
    margin-left: -0.53%;
    margin-right: -0.5%;
}
.sidenav { /*Боковое меню на всех страницах*
    height: 100%;
    width: 0%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a { /*Боковое меню. Ссылки на всех страницах*
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}


.sidenav a:hover { /*Боковое меню. Ссылки. Фокус на всех страницах*
    color: #f1f1f1;
}


@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}

}*/

body{ /*Стиль body*/
    background-color: rgb(239,237,239);
    padding: 0;
    margin: 0;
    background: url("Background.png") no-repeat;
    background-size: 100%;
    background-attachment: fixed;
}
.headers /*Стиль блока меню*/
{
    width: 100%;
    height: 60px;
    background-color: rgb(214,209,214);
    font-family: "Monotype corsiva";
    display: -webkit-flex;
    display: flex;
}
 
.title /*Стиль "Кудряшки"*/
{
    width: 20%;
    font-weight: bold;
    font-size: 35px;
    margin: 15px 15px 0 0;
    color: black;
    text-shadow: rgba(90, 5, 62, 0.226) 4px -4px 0, rgba(90, 5, 62, 0.226) -1px -1px 0;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-justify-content: center;
    justify-content: center;
}
 
.menu /*Стиль меню*/
{
    width: 60%;
    font-weight: bold;
    font-size: 25px;
    list-style-type: none;   /*отсутствие маркеров*/
    color: black;
    padding: 0;
    margin: 0;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-justify-content: center;
    justify-content: center;
}
 
.menu li /*Сдвиг ссылок в меню вниз*/
{
    margin: 15px 15px 0 0;
}
 
.menua { /*Стиль кнопок меню*/
    text-decoration: none;
    color: rgb(63, 37, 37);
   
}
 
.menua:hover{ /*Стиль кнопок меню. Фокус*/
    color: rgb(211, 35, 152);
    text-decoration: underline;
}

 
 
.lk{ /*Стиль кнопки ЛК*/
    width: 20%;
    font-size: 25px;
    margin: 15px 15px 0 0;
 
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-justify-content: center;
    justify-content: center;
}


.orderbut{
    right: 5%;
    bottom: 5%;
    position: fixed;
}

.servicesprice { /*Стиль текста на страницах отдельных услуг*/
    white-space: pre;
    font-family: Cambria;
    font-size: 200%;
    padding-bottom: 3%;
}

.mainheader{ /*Стиль блока с заголовком группы услуг на страницах отдельных услуг*/
    border-bottom: double black;
    height: 100px;
    width: 50%;
    top: 3%;
    padding-top: 0.1%;
    margin-left: 23%;
}

.mainheadertext{ /*Стиль заголовков групп услуг на страницах отдельных услуг*/
    font-family: 'Monotype Corsiva';
    font-size: 300%;
}

.servicediv{ /*Стиль блока с прайсом на услуги на страницах отдельных услуг*/
    margin-left: 23%;
    width: 48.5%;
}
</style>