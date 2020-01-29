import React from "react"
import "./style.scss"
import SelectBlock from "./SelectBlock"
import SliderBlock from "./SliderBlock"

import experienceImg from "./assets/experienceImg.png"
import jsImg from "./assets/jsImg.png"
import personImg from "./assets/personImg.png"
import profileImg from "./assets/profileImg.png"

import mark1Img from "./assets/markImg.png"
import menuImg from "./assets/menuImg.svg"

function App() {
  return (
    <>
      <div className="outside header">
        <div className="header__menu">
          <a className="header__menu-link active" href="0#">
            Личная информация
          </a>
          <a className="header__menu-link" href="0#">
            Опыт
          </a>
          <a className="header__menu-link" href="0#">
            JavaScript
          </a>
          <a className="header__menu-link" href="0#">
            О себе
          </a>
          <a href="0#"><img src={menuImg} alt=""/></a>
        </div>
        <div className="header__title">
          <h1>Анкета</h1>
        </div>
      </div>
      <div className="outside profile">
        <div className="inside">
          <div className="profile__title">
            <img src={profileImg} alt="" />
            <h3>Личная информация</h3>
          </div>
          <div className="profile__form">
            <input
              className="profile__form-name"
              type="text"
              placeholder="ФИО"
            />
            <SelectBlock
              className="profile__form-year"
              placeholder="Год рождения"
            />
            <input
              className="profile__form-place"
              type="text"
              placeholder="Место рождения"
            />
            <input
              className="profile__form-skype"
              type="text"
              placeholder="Skype"
            />
            <input
              className="profile__form-email"
              type="text"
              placeholder="E-mail"
            />
          </div>
        </div>
      </div>

      <div className="outside experience">
        <div className="inside">
          <div className="experience__title">
            <img src={experienceImg} alt="" />
            <h3>Расскажите о своем опыте</h3>
          </div>
          <div className="experience__action">
            <div className="experience__action-checkboxs">
              <label className="experience__action-checkbox">
                <input type="checkbox" />

                <span>БЭМ/OOCSS</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Stylus/LESS/SASS</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Работаю с SVG</span>
              </label>
            </div>

            <div className="experience__action-checkboxs">
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Верстаю семантично</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>ES2015/ES2016</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Gulp/GRUNT</span>
              </label>
            </div>

            <div className="experience__action-checkboxs">
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Webpack</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>Ипользую Git</span>
              </label>
              <label className="experience__action-checkbox">
                <input type="checkbox" />
                <span>jQuery</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="outside skill">
        <div className="inside">
          <div className="skill__title">
            <img src={jsImg} alt="" />
            <h3>Уровень владения JavaScript</h3>
          </div>
          <div className="skill__mark">
            <div className="skill__mark-text">
              <p>Не владею</p>
              <p>
                Использую готовые
                <br />
                решения
              </p>
              <p>
                Использую готовые решения
                <br /> и умею и переделывать
              </p>
              <p>Пишу сложный JS с нуля</p>
            </div>
            <img className="skill__mark-img" src={mark1Img} alt="" />
          </div>
          <SliderBlock />
        </div>
      </div>
      <div className="outside pers-information">
        <div className="inside">
          <div className="pers-information__title">
            <img src={personImg} alt="" />
            <h3>Расскажите о себе</h3>
            <p>
              Напишите несколько предложений, чем привлекла наша вакансия и что
              вы ожидаете от работы у нас
            </p>
          </div>
          <div className="pers-information__action">
            <textarea
              className="pers-information__action-textarea"
              placeholder="Понравилось тем, что..."
            />
            <button type="submit" className="pers-information__action-button">
              Готово
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
