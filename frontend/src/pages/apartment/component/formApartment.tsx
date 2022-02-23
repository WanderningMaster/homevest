/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { Title } from 'pages/apartment/component/title'
import Button from 'components/common/button/button'
import { ApartmentSchema } from 'pages/apartment/apartmentSchema'
import { ApartmentProps } from 'pages/apartment/types/apartment-props.interface'
import { InputApartmentField } from 'pages/apartment/component/inputFieldApartment'
import { Select } from 'components/common/select/select'
import ToggleButton from 'components/common/button/toggleBtn'
import clsx from 'clsx'
import { LabelSelectApartment } from 'pages/apartment/component/labelSelectApartment'
import { inputDatas } from 'pages/apartment/mock-data/input-data'
import { selectDatas } from 'pages/apartment/mock-data/select-data'
import { toggleDatas } from 'pages/apartment/mock-data/toggle-data'
import { ImageUploadInput, ImageThumb } from 'pages/apartment/component/ImageUpload'
import { AppRoute } from 'common/enums'
import { postNewAppartment } from 'store/appartment/appartmentOperations'
import { ApartmentActionsCreator } from 'store/appartment/appartmentReducer'

const FormApartment: React.FC = () => {
  const inputFile = useRef(null)
  const [imgState, setImgState] = useState<string[]>([])
  console.log(imgState.join(',').split(' '))
  const dispatch = useDispatch()
  const history = useHistory()
  // const [successMessage, setSuccessMessage] = useState(false)
  // const [errMessage, setErrMessage] = useState(false)

  const onImageUpload = (event: { preventDefault: () => void; target: { files: any } }) => {
    event.preventDefault()
    const files: any = event.target.files
    const myFiles = URL.createObjectURL(files[0])
    console.log(myFiles)

    setImgState([...imgState, myFiles])
  }

  const onSubmitData = (values: any) => {
    const data = {
      estateId: values.estateId,
      nameOfBuilding: values.nameOfBuilding,
      numberOfRooms: values.numberOfRooms,
      numberOfBathrooms: values.numberOfBathrooms,
      typeOfParking: values.typeOfParking,
      price: values.price,
      priceForM2: values.priceForM2,
      location: values.location,
      appartmentClass: values.appartmentClass,
      floors: values.floors,
      appartmentState: values.appartmentState,
      currency: values.currency,
      yearOfOperation: values.yearOfOperation,
      salesStatus: values.salesStatus,
      investmentType: values.investmentType,
      lending: values.lending,
      installments: values.installments,
      mortgage: values.mortgage,
      images: values.images,
      // images: imgState.join(),
    }
    // const formData = new FormData()
    // for (const value in values) {
    //   console.log(value, values[value])

    //   formData.append(value, values[value])
    // }
    // console.log({ ...formData })

    // postNewAppartment(data)

    dispatch(ApartmentActionsCreator.submitApartment(data))
    backToDashboard()
  }

  const backToDashboard = () => history.push(AppRoute.NEW_BUILDINGS)

  const initialValues: ApartmentProps = {
    estateId: '9d9a3338-1c6c-4a10-9341-36840b4e4d55',
    nameOfBuilding: 'RC Rainbow',
    numberOfRooms: '4',
    numberOfBathrooms: '1',
    typeOfParking: 'underground',
    price: '500 000',
    priceForM2: '1000',
    location: 'Kyiv',
    appartmentClass: '',
    floors: '',
    appartmentState: '',
    currency: '',
    yearOfOperation: '',
    investmentType: 'payment via bank card',
    salesStatus: '',
    lending: false,
    installments: false,
    mortgage: false,
    images:
      'https://c1.wallpaperflare.com/preview/183/25/215/pool-backyard-pool-swimming-backyard-patio.jpg',
  }

  return (
    <div className="absolute inset-x-0  mx-auto w-1440px px-75px  ">
      <div className="flex item-center justify-center mx-auto">
        <div className="relative  w-1290px flex flex-col">
          <div className=" absolute flex justify-center items-center top-36 ">
            <Formik
              initialValues={initialValues}
              validationSchema={ApartmentSchema}
              onSubmit={onSubmitData}
            >
              {props => {
                const { values, handleSubmit, handleChange, setFieldValue, dirty } = props
                return (
                  <Form
                    method="POST"
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
                              // onChange={handleChange}
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
                                // value={values[el.name]}
                                onChange={option => setFieldValue(el.name, (option as any).value)}
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

                      <div className="flex  w-1/2 ml-30px flex-col">
                        {imgState && imgState.length > 0 ? (
                          <div className=" flex flex-wrap items-center justify-between">
                            {imgState.map((path: string) => (
                              <div key={path}>
                                <ImageThumb path={path} />
                              </div>
                            ))}
                            <ImageUploadInput
                              size="h-232px  w-300px "
                              onImageUpload={onImageUpload}
                              inputFile={inputFile}
                            />
                          </div>
                        ) : (
                          <ImageUploadInput
                            size="h-232px  w-630px "
                            onImageUpload={onImageUpload}
                            inputFile={inputFile}
                          />
                        )}
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
