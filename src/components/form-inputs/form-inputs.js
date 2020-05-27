import React from 'react'
import RadioInput from '../radio-input'
import SearchField from '../search-field'
import SearchResults from '../search-results'

// "price_4":777,"price_4p":777,"price_5":777,"price_5p":777

const FormInputs = (props) => {
  const { values, onChange, onItemSelected, show, itemList } = props

  return (
    <div className="col-md-7">
      <SearchField onChange={onChange} value={values.name} />

      {show ? (
        <SearchResults onItemSelected={onItemSelected} itemList={itemList} />
      ) : null}

      <RadioInput
        name="product_group"
        id="price_5p"
        value="price_5p"
        checked={values.product_group === 'price_5p'}
        onChange={onChange}
        label="Идеальное состояние"
        description="Устройство не имеет следов использования"
      />
      <RadioInput
        name="product_group"
        id="price_5"
        value="price_5"
        checked={values.product_group === 'price_5'}
        onChange={onChange}
        label="Незначительные повреждения"
        description="Устройство имеет незначительные царапины, потертости на корпусе и дисплее. Могут быть точечные сколы."
      />
      <RadioInput
        name="product_group"
        id="price_4p"
        value="price_4p"
        checked={values.product_group === 'price_4p'}
        onChange={onChange}
        label="Заметные повреждения"
        description="Устройство имеет множественные потертости и царапины на корпусе и дисплее. Допускаются незначительные повреждения краски корпуса"
      />
      <RadioInput
        name="product_group"
        id="price_4"
        value="price_4"
        checked={values.product_group === 'price_4'}
        onChange={onChange}
        label="Сильные повреждения"
        description="Устройство имеет многочисленные глубокие царапины, сколы, сильные повреждения краски."
      />
    </div>
  )
}

export default FormInputs
