import React from 'react'
import { Formik, Form } from 'formik'
import { Title } from './title'
import Button from 'components/common/button/button'
import { ApartmentSchema } from '../apartmentSchema'
import { ApartmentProps } from '../types/apartment-props.interface'
import { InputApartmentField } from './inputFieldApartment'
import { Select } from 'components/common/select/select'
import ToggleButton from 'components/common/button/toggleBtn'
import { ReactComponent as ImagesLoad } from '../../../assets/images/images-load.svg'
import clsx from 'clsx'
import { LabelSelectApartment } from './labelSelectApartment'
import { inputDatas } from '../mock-data/input-data'
import { selectDatas } from '../mock-data/select-data'
import { toggleDatas } from '../mock-data/toggle-data'

interface InputMapProps {
  inputDatas: typeof inputDatas
}
interface SelectMapProps {
  selectDatas: typeof inputDatas
}
interface ToogleMapProps {
  toggleDatas: typeof toggleDatas
}

const FormApartment: React.FC = () => {
  const initialValues: ApartmentProps = {
    nameOfBuilding: '',
    numberOfRooms: '',
    numberOfBathrooms: '',
    typeOfParking: '',
    price: '',
    priceForM2: '',
    location: '',
    appartmentClass: '',
    floors: '',
    appartmentState: '',
    currency: '',
    yearOfOperation: '',
    salesStatus: '',
    lending: false,
    installments: false,
    mortgage: false,
    images: [],
  }
  return (
    <div className="absolute inset-x-0  mx-auto w-1440px px-75px  ">
      <div className="flex item-center justify-center mx-auto">
        <div className="relative  w-1290px flex flex-col">
          <div className=" absolute flex justify-center items-center top-36 ">
            <Formik
              initialValues={initialValues}
              validationSchema={ApartmentSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  console.log(values)
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {props => {
                const { values, handleSubmit, handleChange, setFieldValue, dirty } = props
                return (
                  <Form
                    className="items-center  text-body-small text-green"
                    onSubmit={handleSubmit}
                  >
                    <Title />
                    <div className="flex flex-row justify-center">
                      <div className=" w-1/2 ">
                        <div className="flex flex-wrap justify-between grid-col-2 gap-30px ">
                          {inputDatas.map(item => (
                            <InputApartmentField
                              key={item.name}
                              name={item.name}
                              label={item.label}
                              value={values[item.name]}
                              onChange={handleChange}
                              className={clsx('', {
                                'border-green': dirty,
                              })}
                            />
                          ))}
                        </div>
                        <InputApartmentField
                          name="location"
                          label="Location (City, street)"
                          value={values.location}
                          onChange={handleChange}
                          className={clsx('w-630px', {
                            'border-green': dirty,
                          })}
                        />
                        <div className="flex flex-wrap justify-between grid-col-2 gap-30px">
                          {selectDatas.map(el => (
                            <div className="relative  mb-8" key={el.name}>
                              <Select
                                key={el.name}
                                name={el.name}
                                options={el.options.map(option => option)}
                                placeholder={el.placeholder}
                                overrideClassNames={{
                                  Control: () => 'w-300px h-8.5',
                                  Menu: () => 'w-300px ',
                                  Option: () => 'w-72',
                                }}
                                value={values[el.name]}
                                onChange={option => setFieldValue(el.name, option)}
                              />
                              {values[el.name] !== '' && (
                                <LabelSelectApartment labelName={el.labelName} />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center w-630px">
                          {toggleDatas.map(el => (
                            <ToggleButton
                              key={el.name}
                              label={el.label}
                              getSwitched={checked => (values[el.name] = checked)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex  w-1/2 ml-30px">
                        <div className=" flex flex-col justify-center items-center text-center w-630px h-232px border border-dashed border-grey border-box rounded-8px">
                          <ImagesLoad className="w-80 h-60px cursor-pointer" />
                          <p className="text-center text-black font-semibold text-body leading-body mt-6">
                            Drag or click to browse photos of your property (up to 6 photos)
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      name="primary"
                      type="submit"
                      label="Save"
                      className="mt-53px disabled:bg-green-inactive"
                      disabled={!dirty}
                    />
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormApartment
