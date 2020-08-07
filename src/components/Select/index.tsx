import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<ISelectProps> = ({ name,label, options, ...rest }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select id={name} {...rest}>
      <option value="" disabled hidden>Selecione uma opção</option>
      {options.map(({value, label}) => <option key={value} value={value}>{label}</option> )}
    </select>
  </div>
)

export default Select