import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./GuessSTM.module.scss";
import { useAuthContext } from "../../../contexts/authContext";
import guessSTMStore from "../../../stores/guessSTMStore";
import DecorativeElements from "../../ui/DecorativeElements";
import Pifagor from "../../../assets/images/logoSTM/Pifagor.jpg";
import Younland from "../../../assets/images/logoSTM/Younland.jpg";
import Island from "../../../assets/images/logoSTM/Island.jpg";
import Gold_tail from "../../../assets/images/logoSTM/Gold_tail.jpg";
import Melody from "../../../assets/images/logoSTM/Melody.jpg";
import Gold_ideal from "../../../assets/images/logoSTM/Gold_ideal.jpg";
import TechTop from "../../../assets/images/logoSTM/TechTop.jpg";
import Grandmaster from "../../../assets/images/logoSTM/Grandmaster.jpg";
import Taigaru from "../../../assets/images/logoSTM/Taiga.jpg";
import Heikki from "../../../assets/images/logoSTM/Heiki.png";
import Germanium from "../../../assets/images/logoSTM/Germanium.jpg";
import Daswerk from "../../../assets/images/logoSTM/Daswerk.jpg";
import Galant from "../../../assets/images/logoSTM/Galant.jpg";
import Brabix from "../../../assets/images/logoSTM/Brabix.jpg";
import Cromex from "../../../assets/images/logoSTM/Cromex.jpg";
import Sonnen from "../../../assets/images/logoSTM/Sonnen.jpg";
import Wellday from "../../../assets/images/logoSTM/Wellday.jpg";
import Lubasha from "../../../assets/images/logoSTM/Lubasha.jpg";
import Laima from "../../../assets/images/logoSTM/Laima.jpg";
import Staff from "../../../assets/images/logoSTM/Staff.jpg";
import Brauberg_hobby from "../../../assets/images/logoSTM/Brauberg_hobby.jpg";
import Brauberg_kids from "../../../assets/images/logoSTM/Brauberg_kids.jpg";
import Brauberg_art from "../../../assets/images/logoSTM/Brauberg_art.jpg";
import Brauberg from "../../../assets/images/logoSTM/Brauberg.jpg";
import Ofismag from "../../../assets/images/logoSTM/Ofismag.jpg";
import Umc from "../../../assets/images/logoUMC.png";

const arrProductSTM = [
  {
    [Umc]: `Выбери правильное определение бренда на картинке слева. Для начала нажми кнопку "Выбор СТМ"!`,
  },
  {
    [Ofismag]: `– качественные офисные принадлежности: бумага для оргтехники; блокноты; папки; ручки; хозтовары и упаковочные материалы; чертежные принадлежности; канцелярские мелочи и многое другое. Была создана в 2009 году и стала отражением тенденций рынка товаров для офиса.`,
  },
  {
    [Brauberg]: `– бренд с более чем 20 летней историей. Под этим брендом производятся тысячи товаров в различных товарных группах: - товары для офиса; - товары для школы. Суббренды: - товары для художников – ... ART; -товары для детского развития и творчества – ... KIDS; - товары для рукоделия и хобби – ... HOBBY.`,
  },
  {
    [Brauberg_art]: `- товары для художников. Материалы и инструменты для художественных работ, подходящие для детского творчества и развития.Все товары бренда представлены в трех сериях: DEBUT: ... CLASSIC (профессиональная серия): ... PREMIERE .... `,
  },
  {
    [Brauberg_kids]: `– яркий бренд канцелярских детских товаров, созданный специально для маленьких ручек. В ассортименте бренда можно найти не только карандаши и фломастеры, но и большое количество товаров для досуга и развития ребенка.`,
  },
  {
    [Brauberg_hobby]: `– это материалы, инструменты и аксессуары для рукоделия и творчества. Товары, которые помогут выразить свою индивидуальность.`,
  },
  {
    [Staff]: `– объединяет в себе бюджетные канцелярские товары и качественные калькуляторы. Это продукция «первой цены», но производится она при строгом соблюдении спецификаций и тщательном контроле качества.`,
  },
  {
    [Laima]: `– широкая линейка качественных товаров хозяйственно-бытового и санитарно-гигиенического назначения: Хозтовары. Бытовая химия. Уборочный инвентарь. Санитарно-гигиенические товары PROFESSIONAL... EXPERT... HOME... ДЕЗ`,
  },
  {
    [Lubasha]: `– бюджетные хозяйственные товары и товары бытовой химии, призванные обеспечить базовые потребности при уборке дома и офисных помещений.`,
  },
  {
    [Wellday]: `– Ассортимент идеально подходит для организации кофе-брейков, сервировки переговорных комнат, использования на офисных кухнях. Продукты питания для офиса.`,
  },
  {
    [Sonnen]: `– бытовая техника, мобильная электроника, компьютерные аксессуары, совместимые картриджи, батарейки, светильники и лампы. Ценовой сегмент 'Средний+'`,
  },
  {
    [Cromex]: `– бюджетная бытовая техника, мобильная электроника, компьютерные аксессуары. Ценовой сегмент 'Низкий'`,
  },
  {
    [Brabix]: `– это мебель и аксессуары для дома и офиса. Кресла для персонала и руководителей, кресла для приемных и переговорных, кресла компьютерные и геймерские, кресла детские и школьные, стеллажи, металлические шкафы, сейфы, вешалки.`,
  },
  {
    [Galant]: `– деловые аксессуары на стыке канцелярского и подарочного сегментов: ежедневники, визитницы, настольные наборы, подарочные ручки.`,
  },
  {
    [Daswerk]: `– товары продукции массового спроса из самых различных категорий. Эти товары созданы для упрощения жизни, для повышения уровня комфорта, решения повседневных задач, товары на все случаи жизни.`,
  },
  {
    [Germanium]: `- универсальные рюкзаки для деловой и городской среды и активного отдыха, обладают исключительной функциональностью и непревзойденным качеством!`,
  },
  {
    [Heikki]: `- молодежные рюкзаки и сумки различных стилей и назначений. Изделия выполнены из высококачественных материалов с использованием современных конструкторских решений и технологий.`,
  },
  {
    [Taigaru]: `- товары для туризма и отдыха на природе.`,
  },
  {
    [Grandmaster]: `– категория профессиональных инструментов, инвентаря и расходных материалов`,
  },
  {
    [TechTop]: `– ассортимент профессионального инструмента, инвентаря, который является ТОПовым за свои деньги! Для сада и огорода.`,
  },
  {
    [Gold_ideal]: `- бытовая и профессиональная химия. Мыло и дозаторы, антисептические гели, парфюмерно-косметические средства.`,
  },
  {
    [Melody]: `– парфюмерно-косметические средства и товары бытовой химии по доступной цене`,
  },
  {
    [Gold_tail]: `– товары для организации и проведения праздников, оформления подарков, украшения интерьера. Ключевые категории бренда: новогодний ассортимент; подарочная упаковка; товары для оформления праздника.`,
  },
  {
    [Island]: `– яркие товары для творчества, рукоделия и хобби! Продукция адаптирована для любого потребителя и придется по вкусу как новичкам, так и людям, занимающимся творчеством профессионально.`,
  },
  {
    [Younland]: `– товары для учебы, развития и творчества. Это линейка товаров для детей дошкольного и младшего школьного возраста, содержащая развивающий контент.`,
  },
  {
    [Pifagor]: `– товары для учебы и школьного творчества с минимальной ценой и приемлемым качеством. Эконом-сегмент.`,
  },
];

let nextItem = 0;
let userChoise: any[] = [];

let newArrProductSTM = [...arrProductSTM];

const GuessSTM: React.FC = () => {
  const { user, loginStatus } = useAuthContext();

  const { createLastTry, isLoading, createAttempts, deleteLastTryResults } = guessSTMStore;

  const [dataOfLastTry, setDataOfLastTry] = useState({
    brandName: "",
    selectedOption: "",
    correctOption: "",
    answer_status: false,
    userId: 0,
  });

  const [showSTM, setShowSTM] = useState([
    Object.keys(arrProductSTM[0]),
    Object.values(arrProductSTM[0]),
  ]);

  const [correct, setCorrect] = useState(0);
  const [uncorrect, setUnCorrect] = useState(0);
  const [button, setButton] = useState("");

  const tableToExcel = (one: string, two: string, three: string) => {
    alert("Here will be pass on to Excel" + one + two + three);
  };

  useEffect(() => {
    newArrProductSTM.length === 0
      ? setButton("Отправка результатов")
      : setButton("Выбор СТМ");
    return () => {
      setCorrect(userChoise.reduce((accum, el) => accum + el[4], 0));
      setUnCorrect(userChoise.reduce((accum, el) => accum + el[5], 0));
    };
  }, [userChoise.length]);

  const startCondition = async () => {
    await createAttempts({
      correct: correct,
      uncorrect: uncorrect,
      userId: user.id,
    });

    await deleteLastTryResults(user.id);   

    try {

      const promises = userChoise.map(async (el) => {
        const lastTry = {
          brandName: el[0][0],
          selectedOption: el[1].join(""),
          correctOption: el[2][0],
          answer_status: el[3] == "Верно" ? true : false,
          userId: user.id,
        }
        // console.log("lastTry - ", lastTry);

        try {                 
          await createLastTry(lastTry);

        } catch (error) {
          console.log("createLastTry - ", error);
        }

      });
      
      // await Promise.all(promises);
  
      // console.log(isLoading);
      nextItem = 0;
      userChoise = [];
      newArrProductSTM = [...arrProductSTM];
      setButton("Выбор СТМ");

    } catch (error) {
      // console.log("Promiss - " + error);
    }
  };

  ///////////////
  function selectionOfBrandsAndStatements(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    nextItem = Math.floor(0 + Math.random() * newArrProductSTM.length);

    if (newArrProductSTM.length > 1) {
      setShowSTM([
        Object.keys(
          newArrProductSTM[nextItem === 0 ? (nextItem += 1) : nextItem]
        ),
        Object.values(
          newArrProductSTM[nextItem === 0 ? (nextItem += 1) : nextItem]
        ),
      ]);
    }
    if (newArrProductSTM.length === 1) {
      setShowSTM([
        Object.keys(newArrProductSTM[(nextItem = 0)]),
        Object.values(newArrProductSTM[(nextItem = 0)]),
      ]);
    }
    if (newArrProductSTM.length === 0) {
      alert("Вопросы закончились!");
    }

    if (newArrProductSTM.length < 26) {
      const target = e.target as HTMLDivElement;
      userChoise.push([
        Object.values(showSTM[0]),
        Object.values(target.textContent as string),
        Object.values(showSTM[1]),
        target.textContent == showSTM[1][0] ? "Верно" : "Неверно",
        target.textContent == showSTM[1][0] ? 1 : 0,
        target.textContent != showSTM[1][0] ? 1 : 0,
      ]);
    }
    newArrProductSTM.splice(nextItem, 1);
  }
  /////////////////////

  return (
    <>
      <div className={classes.work_place}>
        <div>
          <div className={classes.block_time}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => alert("Вывод результатов в Excel")}
            >
              Экспорт в EXCEL
            </span>
            <span>Верно: {correct}</span>
            <span>Неверно: {uncorrect}</span>
            <Link to={"/personal-page"}>
            <span id="userName">
              {user.id}. {user.fio}
            </span>
            </Link>
            {/* <input id="userNameValue" type="text" placeholder="ФИО"></input> */}
            <span className={classes.label_time_test}>
              Время прохождения теста:
            </span>
            <span className={classes.block_time_option} id="block_time_option">
              <input
                className={classes.input_time_test}
                id="input_time-test"
                type="text"
                // value="60"
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
          <div className={classes.photo_STM}>
            <img style={{ width: "100%" }} src={showSTM[0][0]} alt="" />
            <button
              style={{
                display:
                  newArrProductSTM.length === 0 || nextItem === 0
                    ? "block"
                    : "none",
              }}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                nextItem === 0 && newArrProductSTM.length !== 0
                  ? selectionOfBrandsAndStatements(e)
                  : startCondition();
              }}
            >
              {button}
            </button>
          </div>
          <div
            className={classes.description_STM}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              newArrProductSTM.length > 0
                ? selectionOfBrandsAndStatements(e)
                : setShowSTM([
                    Object.keys(arrProductSTM[0]),
                    Object.values(arrProductSTM[0]),
                  ]);
              // console.log(userChoise);
            }}
          >
            {
              // showResult[0]
              nextItem % 2 === 0
                ? Object.values(showSTM[1])
                : Object.values(
                    arrProductSTM[nextItem > 2 ? nextItem - 1 : nextItem + 1]
                  )
            }
          </div>
          <div
            style={{ opacity: nextItem === 0 ? "0" : "1" }}
            className={classes.description_STM}
            onClick={(e) =>
              newArrProductSTM.length > 0
                ? selectionOfBrandsAndStatements(e)
                : setShowSTM([
                    Object.keys(arrProductSTM[0]),
                    Object.values(arrProductSTM[0]),
                  ])
            }
          >
            {
              // showResult[1]
              nextItem % 2 === 1
                ? Object.values(showSTM[1])
                : Object.values(
                    arrProductSTM[nextItem > 2 ? nextItem - 1 : nextItem + 1]
                  )
            }
          </div>

          <div>Результаты:</div>
          <div>
            {userChoise.map((el, index) => (
              <div key={index} className={classes.block_result}>
                <div className={classes.show_result}>
                  <img style={{ width: "100%" }} src={el[0]} alt="" />
                </div>
                <div className={classes.show_result}>{el[1]}</div>
                <div className={classes.show_result}>{el[2]}</div>
                <div className={classes.show_result}>{el[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DecorativeElements />
    </>
  );
};

export default GuessSTM;
