import Select from 'react-select'
import { filters } from '../lib/filters'

import './styles.scss'

interface FilterSelectProp {
  filter?: string
  setFilter(input: string | null): void
}
export default function FilterSelect({ setFilter }: FilterSelectProp) {
  const handleChange = (
    selectedOption:
      | {
          value: null
          label: string
        }
      | {
          value: string
          label: string
        },
  ) => {
    setFilter(selectedOption.value)
  }
  return (
    <Select
      placeholder="Filters"
      options={filters}
      className="react-select-container"
      classNamePrefix="custom-filter-select"
      onChange={option => (option ? handleChange(option) : null)}
    />
  )
}
