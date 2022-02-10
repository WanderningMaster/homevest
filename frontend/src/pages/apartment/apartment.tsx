import React from "react";
import { useState } from "react";
import Button from "components/common/button/button";
import { InputField } from "components/common/input/input-field";
import { Select } from "components/common/select/select";
import { Formik, Form, FormikHelpers } from "formik";
import { Typography } from "components/common/typography/typography";
import { styles } from "./apartment.styles";
import { ReactComponent as ImagesLoad } from "assets/images/images-load.svg";
import ToggleButton from "components/common/button/toggleBtn";
import { SideBar } from "components/Navigation/SideBar";
import { Header } from "components/Navigation/Header";
import { AppBar } from "components/Navigation/AppBar";
import { Logo } from "components/Navigation/Logo";
import { ApartmentProps } from "./types/apartment-props.interface";
import { ApartmentSchema } from "./apartmentSchema";



export const ApartmentPage: React.FC = () => {
  const initialValues: ApartmentProps = {
    nameOfBuilding: "",
    numberOfRooms: "",
    numberOfBathrooms: "",
    typeOfParking: "",
    price: "",
    priceForM2: "",
    location: "",
    appartmentClass: "",
    floors: "",
    appartmentState: "",
    currency: "",
    yearOfOperation: "",
    salesStatus: "",
    lending: false,
    installments: false,
    mortgage: false,
    images: [],
  };

  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(true);
  };

  return (
    <>
      {active ? (
        <>
          <SideBar />
          <Header position="left-72">
            <AppBar />
          </Header>
        </>
      ) : (
        <>
          <Header position="left-0">
            <Logo onClick={onClick} />
            <AppBar />
          </Header>
        </>
      )}

      <div className=" absolute  top-36 min-w-full  py-8 px-75px bg-white mx-0 my-0">
        <Typography type="h4" className="mb-6">
          Appartment Settings
        </Typography>
        <p className=" text-black font-medium text-body-large leading-body-large">
          Add or edit information about your property so we can show it on the
          website
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={ApartmentSchema}
          onSubmit={(
            values: ApartmentProps,
            { setSubmitting }: FormikHelpers<ApartmentProps>
          ) => {
            
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(true);
            }, 500);
          }}
        >
          <Form className=" mt-10 text-body-small text-green">
            <div className="flex flex-row   justify-center item-center ">
              <div className=" w-1/2 ">
                <div className="flex flex-wrap">
                  <InputField
                    name="nameOfBuilding"
                    placeholder="Name of building"
                    className="w-300px h-8.5 mr-30px mb-8"
                  />
                  <InputField
                    name="numberOfRooms"
                    placeholder="Number of rooms"
                    className="w-300px h-8.5 mr-30px mb-8"

                  />
                  <InputField
                    name="numberOfBathrooms"
                    placeholder="Number of bathrooms"
                    className="w-300px h-8.5 mr-30px mb-8"
                  />
                  <InputField
                    name="typeOfParking"
                    placeholder="Type of parking"
                    className="w-300px h-8.5 mr-30px mb-8"
                  />
                  <InputField
                    name="price"
                    placeholder="Price"
                    className="w-300px h-8.5 mr-30px mb-8"
                  />
                  <InputField
                    name="priceForM2"
                    placeholder="Price for m2"
                    className="w-300px h-8.5  mr-30px mb-8"
                  />
                </div>
                <InputField
                  name="location"
                  placeholder="Location (City, street)"
                  className="w-630px h-8.5  mb-8"
                  
                />
                <div className="flex flex-wrap">
                  <Select
                    name="apartmentClass"
                    options={[
                      { value: "Premium", label: "Premium" },
                      { value: "Business", label: "Business" },
                      { value: "Comfort", label: "Comfort" },
                      { value: "Economy", label: "Economy" },
                    ]}
                    placeholder="Apartment class"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                  <Select
                    name="floors"
                    options={[
                      { value: "till 5", label: "till 5" },
                      { value: "6-10", label: "6-10" },
                      { value: "10-16", label: "10-16" },
                      { value: "17-26", label: "17-26" },
                      { value: "from 27", label: "from 27" },
                    ]}
                    placeholder="Floors"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                  <Select
                    name="apartmentState"
                    options={[
                      {
                        value: "With rough repairs",
                        label: "With rough repairs",
                      },
                      { value: "Under repair", label: "Under repair" },
                      { value: "No repair", label: "No repair" },
                      { value: "With repair", label: "With repair" },
                    ]}
                    placeholder="Apartment state"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                  <Select
                    name="currency"
                    options={[
                      { value: "hryvnia", label: "UAH" },
                      { value: "dollar", label: "USD" },
                    ]}
                    placeholder="Currency"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                  <Select
                    name="yearOfOperation"
                    options={[
                      { value: "Already in", label: "Already in" },
                      { value: "2021", label: "2021" },
                      { value: "2022", label: "2022" },
                      { value: "2023+", label: "2023+" },
                    ]}
                    placeholder="Year of operation"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                  <Select
                    name="salesStatus"
                    options={[
                      { value: "Not started", label: "Not started" },
                      { value: "Booked", label: "Booked" },
                      { value: "Started", label: "Started" },
                    ]}
                    placeholder="Sales status"
                    className="w-300px h-8.5 mr-30px mb-8"
                    styles={styles}
                  />
                </div>
                <div className="flex justify-between items-center w-630px">
                  <ToggleButton label="Landing" getSwitched={(checked=>console.log(checked))}/>
                  <ToggleButton label="Installments" getSwitched={(checked=>console.log(checked))}/>
                  <ToggleButton label="Mortgage" getSwitched={(checked=>console.log(checked))}/>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className=" flex flex-col justify-center items-center text-center w-630px h-232px border border-dashed border-grey border-box rounded-8px">
                  <ImagesLoad className="w-80 h-60px cursor-pointer" />
                  <p className="text-center text-black font-semibold text-body leading-body mt-6">
                    Drag or click to browse photos of your property (up to 6
                    photos)
                  </p>
                </div>
              </div>
            </div>
            <Button
              nameBtn="primary"
              type="submit"
              label="Save"
              className="mt-53px disabled:bg-green-inactive"
            />
          </Form>
        </Formik>
      </div>
    </>
  );
};
