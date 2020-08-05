import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => (  
  <article className="teacher-item">
  <header>
    <img src="https://avatars1.githubusercontent.com/u/42413502?s=460&u=cee472dd5088f65eb7172587647012fb80817c6b&v=4" alt="Marlos Augusto"/>
    <div>
      <strong>Marlos Augusto</strong>
      <span>NodeJS</span>
    </div>
  </header>

  <p>
    Se hoje é o dia das crianças... 
    <br /><br />
    A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!
  </p>

  <footer>
    <p>
      Preço/hora
      <strong>R$ 50,00</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="whatsapp icon"/>
      Entrar em contato
    </button>
  </footer>
</article>
)

export default TeacherItem