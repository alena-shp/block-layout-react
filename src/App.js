import React from "react"
import "./style.scss"
import Slider from "./Slider"

// import experienceImg from './assets/experienceImg.png'
// import  jsImg from './assets/jsImg.png'
// import  personImg from './assets/personImg.png'
import profileImg from "./assets/profileImg.png"

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
            <select className="profile__form-year">
              <option>Год рождения</option>
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1995</option>
              <option>1996</option>
            </select>
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
    </>
  )
}

export default App
