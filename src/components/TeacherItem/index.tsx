import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface IProffyProps {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  user_id: number;  
  name: string;
  subject: string;
  whatsapp: string;
}

const TeacherItem: React.FC<IProffyProps> = (props) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: props.user_id
    })
  }
  return (  
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt={props.name}/>
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>

      <p>{props.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {(props.cost.toFixed(2).replace('.',','))}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${props.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="whatsapp icon"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem