import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export interface IProffyProps {
  avatar: string;
  name: string;
  discipline: string;
  description: string;
  extraDescription?: string;
  priceHour: number;
}

const TeacherItem: React.FC<IProffyProps> = (props) => (  
  <article className="teacher-item">
  <header>
    <img src={props.avatar} alt={props.name}/>
    <div>
      <strong>{props.name}</strong>
      <span>NodeJS</span>
    </div>
  </header>

  <p>
    {props.description}
    {props.extraDescription && (
      <>
        <br /><br />
        {props.extraDescription}
      </>
    )}
  </p>

  <footer>
    <p>
      Preço/hora
      <strong>R$ {(props.priceHour.toFixed(2).replace('.',','))}</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="whatsapp icon"/>
      Entrar em contato
    </button>
  </footer>
</article>
)

export default TeacherItem