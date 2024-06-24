import { useState } from "react";

import classes from "./GuessSTM.module.scss";

import DecorativeElements from "../../ui/DecorativeElements";

const GuessSTM: React.FC = () => {
  const arrProductSTM=[
    {
        "ОФИСМАГ":"– качественные офисные принадлежности: бумага для оргтехники; блокноты; папки; ручки; хозтовары и упаковочные материалы; чертежные принадлежности; канцелярские мелочи и многое другое. Была создана в 2009 году и стала отражением тенденций рынка товаров для офиса.",
    },
    {
        "BRAUBERG":"– бренд с более чем 20 летней историей. Под этим брендом производятся тысячи товаров в различных товарных группах:<br>- товары для офиса; <br>- товары для школы. Суббренды: <br>- товары для художников – ... ART;<br>-товары для детского развития и творчества – ... KIDS;<br>- товары для рукоделия и хобби – ... HOBBY.",
    },
    {
        "BRAUBERG ART":"- товары для художников. Материалы и инструменты для художественных работ, подходящие для детского творчества и развития.<br>Все товары бренда представлены в трех сериях:<br>DEBUT: ....<br>CLASSIC (профессиональная серия): ....<br>PREMIERE .... ",
    },
    {
       "BRAUBERG KIDS":"– яркий бренд канцелярских детских товаров, созданный специально для маленьких ручек. В ассортименте бренда можно найти не только карандаши и фломастеры, но и большое количество товаров для досуга и развития ребенка.",
    },
    {
        "BRAUBERG HOBBY":"– это материалы, инструменты и аксессуары для рукоделия и творчества. Товары, которые помогут выразить свою индивидуальность.",
    },
    {
        "STAFF":"– объединяет в себе бюджетные канцелярские товары и качественные калькуляторы. Это продукция «первой цены», но производится она при строгом соблюдении спецификаций и тщательном контроле качества.",
    },
    {
        "LAIMA":"– широкая линейка качественных товаров хозяйственно-бытового и санитарно-гигиенического назначения: Хозтовары. Бытовая химия. Уборочный инвентарь. Санитарно-гигиенические товары<br>PROFESSIONAL... <br>EXPERT...<br>HOME...<br>ДЕЗ",
    },
    {
        "ЛЮБАША":"– бюджетные хозяйственные товары и товары бытовой химии, призванные обеспечить базовые потребности при уборке дома и офисных помещений.",
    },
    {
        "WELDAY":"– Ассортимент идеально подходит для организации кофе-брейков, сервировки переговорных комнат, использования на офисных кухнях. Продукты питания для офиса.",
    },
    {
        "SONNEN":"– бытовая техника, мобильная электроника, компьютерные аксессуары, совместимые картриджи, батарейки, светильники и лампы.<br>Ценовой сегмент 'Средний+'",
    },
    {
        "CROMEX":"– бюджетная бытовая техника, мобильная электроника, компьютерные аксессуары. <br>Ценовой сегмент 'Низкий'",
    },
    {
       "BRABIX":"– это мебель и аксессуары для дома и офиса. Кресла для персонала и руководителей, кресла для приемных и переговорных, кресла компьютерные и геймерские, кресла детские и школьные, стеллажи, металлические шкафы, сейфы, вешалки.",
    },
	{
       "GALANT":"– деловые аксессуары на стыке канцелярского и подарочного сегментов: ежедневники, визитницы, настольные наборы, подарочные ручки.",
    },
    {
        "DASWERK":"– товары продукции массового спроса из самых различных категорий. Эти товары созданы для упрощения жизни, для повышения уровня комфорта, решения повседневных задач, товары на все случаи жизни.",
    },
    {
        "GERMANIUM":"- универсальные рюкзаки для деловой и городской среды и активного отдыха, обладают исключительной функциональностью и непревзойденным качеством!",
    },
    {
        "HEIKKI (Хе՛йки)":"- молодежные рюкзаки и сумки различных стилей и назначений. Изделия выполнены из высококачественных материалов с использованием современных конструкторских решений и технологий.",
    },
    {
       "TAIGARU (Тайга՛ру)":"- товары для туризма и отдыха на природе.",
    },
    {
        "ГРАНМАСТЕР":"– категория профессиональных инструментов, инвентаря и расходных материалов",
    },
    {
        "ТЕХ - ТОП":"– ассортимент профессионального инструмента, инвентаря, который является ТОПовым за свои деньги! Для сада и огорода.",
    },
    {
        "ЗОЛОТОЙ ИДЕАЛ":"- бытовая и профессиональная химия. Мыло и дозаторы, антисептические гели, парфюмерно-косметические средства.",
    },
    {
       "МЕЛОДИЯ":"– парфюмерно-косметические средства и товары бытовой химии по доступной цене",
    },
    {
        "ЗОЛОТАЯ СКАЗКА":"– товары для организации и проведения праздников, оформления подарков, украшения интерьера. Ключевые категории бренда: новогодний ассортимент; подарочная упаковка; товары для оформления праздника.",
    },
    {
        "ОСТРОВ СОКРОВИЩ":"– яркие товары для творчества, рукоделия и хобби! Продукция адаптирована для любого потребителя и придется по вкусу как новичкам, так и людям, занимающимся творчеством профессионально.",
    },
    {
        "ЮНЛАНДИЯ":"– товары для учебы, развития и творчества. Это линейка товаров для детей дошкольного и младшего школьного возраста, содержащая развивающий контент.",
    },
    {
        "ПИФАГОР":"– товары для учебы и школьного творчества с минимальной ценой и приемлемым качеством. Эконом-сегмент.",
    },
]

let copyArrProductSTM=[...arrProductSTM];

  const tableToExcel = (one: string, two: string, three: string) => {
    alert("Here will be pass on to Excel" + one + two + three);
  };

  const [showSTM, setShowSTM] = useState([{}, {}]);  

  function selectionOfBrandsAndStatements(){
    if(copyArrProductSTM.length==0){
      return alert("Вопросы закончились!");
    }
    // description.style.color="darkslateblue";// Возвращаем цвет случайного оприсания бренда.
    // btnAnswerTrue.disabled=false;// Делаем кнопку "Правильно" Активной.
    // btnAnswerFalse.disabled=false;// Делаем кнопку "Не правильно" Активной.
    let indexBrandsAndStatement=Math.floor(0 + Math.random() * copyArrProductSTM.length);// Индекс из диапозона элементов copyArrProductSTM.
    // indexStatement=Math.floor(0 + Math.random() * arrProductSTM.length);// Индекс из диапозона элементов arrProductSTM.
    // indexRandomness=Math.floor(0 + Math.random() * 2);// Индекс случайного числа (предназначен для увеличения случайного выбора).
  
    // stringBrand=copyArrProductSTM[indexBrandsAndStatement].brand;
    // stringDescriptionForTheBrand=copyArrProductSTM[indexBrandsAndStatement].description;// Выводим описание к бренд.
  
    // brand.innerText=stringBrand;// Выводим бренд.
    // stringDescription=indexRandomness==0?arrProductSTM[indexStatement].description:stringDescriptionForTheBrand;// Выводим случайное оприсание бренда.
    // description.innerHTML=stringDescription;
   
    // setShowDescript(Object.values(copyArrProductSTM[indexBrandsAndStatement]));
    // copyArrProductSTM[indexBrandsAndStatement];
    // copyArrProductSTM.splice(indexBrandsAndStatement,1);// Удаляем элемент из массив, что бы он не повтарялся.
    
    // setShowSTM([Object.keys(copyArrProductSTM[indexBrandsAndStatement]), Object.values(copyArrProductSTM[indexBrandsAndStatement])]);
    
    setShowSTM([Object.keys(copyArrProductSTM[indexBrandsAndStatement]), Object.values(copyArrProductSTM[indexBrandsAndStatement])]);
    copyArrProductSTM.splice(indexBrandsAndStatement,1);// Удаляем элемент из массив, что бы он не повтарялся.
  }


  //   var tableToExcel = (function() {
  //     var uri = 'data:application/vnd.ms-excel;base64,'
  //     , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
  //     , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
  //     , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  //         return function(table, name) {
  //             if (!table.nodeType) table = document.getElementById(table).cloneNode(true)
  //             notExport=table.querySelectorAll('.not-export');
  //             for(let i = 0; i < notExport.length; i++){
  //                 notExport[i].outerHTML = "";
  //             };
  //             elemBorder=table.querySelectorAll('TD');
  //             for(let i = 0; i < elemBorder.length; i++){
  //                 elemBorder[i].style.border="1px solid #999";
  //             }
  //             //style="border: 1px solid #999;"
  //             var ctx = {worksheet: name || 'Worksheet', table:table.innerHTML}
  //             window.location.href = uri + base64(format(template, ctx))
  //         }
  // })();

  return (
    <>
      <div className={classes.work_place}>
        <div>
          <div className={classes.block_time}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                tableToExcel("table", "Результаты тестирования", "")
              }
            >
              Экспорт в EXCEL
            </span>
            <span id="userName"></span>{" "}
            <input id="userNameValue" type="text" placeholder="ФИО"></input>
            <span className={classes.label_time_test}>
              Время прохождения теста:
            </span>
            <span className={classes.block_time_option} id="block_time_option">
              <input
                className={classes.input_time_test}
                id="input_time-test"
                type="text"
                value="60"
              ></input>
              <span className={classes.label_time_test}>сек.</span>
            </span>
            <div
              className={classes.block_time_time_scroll}
              id="block_time_time_scroll"
            ></div>
          </div>
        </div>
        <div className={classes.show_questions}>
          <div className={classes.photo_STM}>{Object.values(showSTM[0])}</div>
          <div className={classes.description_STM}>{Object.values(showSTM[1])}</div>
          <button onClick={() => console.log(selectionOfBrandsAndStatements(), copyArrProductSTM.length)}>Выбор СТМ</button>
        </div>
      </div>

      <DecorativeElements />
    </>
  );
};

export default GuessSTM;
