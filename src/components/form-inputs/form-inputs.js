import React from 'react'
import RadioInput from '../radio-input'
import SearchField from '../search-field'
import SearchResults from '../search-results'

// "price_4":777,"price_4p":777,"price_5":777,"price_5p":777

const FormInputs = (props) => {
  const { values, onChange, onItemSelected, show } = props

  return (
    <div className="col-md-7">
      <SearchField onChange={onChange} value={values.name} />

      {show ? <SearchResults onItemSelected={onItemSelected} /> : null}

      <RadioInput
        name="product_group"
        id="price_4"
        value="4"
        checked={values.product_group === '4'}
        onChange={onChange}
        label="Сильные повреждения"
        description="Устройсво иемеет незначительные потертости на корпусе и дисплее. Могут быть точечные сколы"
      />
      <RadioInput
        name="product_group"
        id="price_4p"
        value="4+"
        checked={values.product_group === '4+'}
        onChange={onChange}
        label="Заметные повреждения"
        description="Устройсво иемеет незначительные потертости на корпусе и дисплее. Могут быть точечные сколы"
      />
      <RadioInput
        name="product_group"
        id="price_5"
        value="5"
        checked={values.product_group === '5'}
        onChange={onChange}
        label="Незначительные повреждения"
        description="Устройсво иемеет незначительные потертости на корпусе и дисплее. Могут быть точечные сколы"
      />
      <RadioInput
        name="product_group"
        id="price_5p"
        value="5+"
        checked={values.product_group === '5+'}
        onChange={onChange}
        label="Идеальное состояние"
        description="Устройсво иемеет незначительные потертости на корпусе и дисплее. Могут быть точечные сколы"
      />
    </div>
  )
}

export default FormInputs
