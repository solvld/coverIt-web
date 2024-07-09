import Select from 'react-select'
import { filters } from '../lib/filters'

import './styles.scss'

export default function FilterSelect() {
  return (
    <Select
      placeholder="Filters"
      options={filters}
      className="react-select-container"
      classNamePrefix="custom-filter-select"
    />
  )
}
