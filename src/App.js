import React from "react"
import "./style.scss"
import Slider from "./Slider"

function App() {
  return (
    <div className="App">
      <div className="outside header">
        <div className="inside">
          <div className="header__menu menu">
            <ul className="menu__links">
              <li className="menu__links-link active">
                <a href="0#">Личная информация</a>
              </li>
              <li className="menu__links-link">
                <a href="0#">Опыт</a>
              </li>
              <li className="menu__links-link">
                <a href="0#">JavaScript</a>
              </li>
              <li className="menu__links-link">
                <a href="0#">О себе</a>
              </li>
            </ul>
          </div>
          <div className="header__title">
            <h1>Анкета</h1>
          </div>
        </div>
      </div>
      <div className="outside profile">
        <div className="inside">
          <div className="profile__title">
            <img src="" alt="" />
            <h3>Личная информация</h3>
          </div>
          <div classname="profile__form">
            <input
              className="profile__form-name"
              type="text"
              placeholder="ФИО"
            />
            <input
              className="profile__form-year"
              type="text"
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
            <img src="" alt="" />
            <h3>Расскажите о своем опыте</h3>
          </div>
          <div className="experience__action">
            <div className="experience__action-checkboxs--one">
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
            </div>

            <div className="experience__action-checkboxs--two">
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
            </div>

            <div className="experience__action-checkboxs--three">
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
            </div>
          </div>
        </div>
      </div>
      <div className="outside skill">
        <div className="inside">
          <div className="skill__title">
            <img src="" alt="" />
            <h3>Расскажите о своем опыте</h3>
          </div>
          <Slider />
        </div>
      </div>
      <div className="outside pers-information">
        <div className="inside">
          <div className="pers-information__title">
            <img src="" alt="" />
            <h3>Расскажите о себе</h3>
            <h3>Расскажите о себе</h3>
            <p>Напишите несколько предложений</p>
          </div>
          <button className="pers-information__action">
            <textarea
              className="pers-information__action-textarea"
              placeholder="Понравилось тем, что..."
            />
            <button type="submit" className="pers-information__action-button">
              Готово
            </button>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
