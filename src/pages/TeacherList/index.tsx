import React from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TeacherItem, { IProffyProps } from '../../components/TeacherItem'

import './styles.css'

// interface IProffysProps {
//   proffys: IProffyProps[]
// }

const TeacherList = () => {
  const proffysMock:IProffyProps[] = [
    {    
      avatar: 'https://avatars1.githubusercontent.com/u/42413502?s=460&u=cee472dd5088f65eb7172587647012fb80817c6b&v=4',
      name: 'Marlos Augusto',
      discipline: 'NodeJS',
      description: 'Se hoje é o dia das crianças...',
      extraDescription: 'A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!',
      priceHour: 50
    },
    {    
      avatar: 'https://avatars1.githubusercontent.com/u/42413502?s=460&u=cee472dd5088f65eb7172587647012fb80817c6b&v=4',
      name: 'Marlos Augusto',
      discipline: 'NodeJS',
      description: 'A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação...',
      priceHour: 88.9
    }
  ]

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        {proffysMock.map((proffy: IProffyProps) => (
          <TeacherItem {...proffy} />
        ))}
      </main>
    </div>
  )
}

export default TeacherList