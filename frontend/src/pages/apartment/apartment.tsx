import React from "react";
import { useState } from "react";
import Button from "components/common/button/button";
import * as Yup from "yup";
import { InputField } from "components/common/input/input-field";
import { Select } from "components/common/select/select";
import { SelectField } from "components/common/select/select-field";
import { Formik, Form, FormikHelpers } from "formik";
import { Typography } from "components/common/typography/typography";
import { styles } from "./apartment.styles";
import { ReactComponent as ImagesLoad } from "assets/images/images-load.svg";
import ToggleButton from "components/common/button/toggleBtn";
import { SideBar } from "components/Navigation/SideBar";
import { Header } from "components/Navigation/Header";
import { AppBar } from "components/Navigation/AppBar";
import { Logo } from "components/Navigation/Logo";
import clsx from "clsx";

interface MyFormValues {
  nameOfBuilding: string;
  numberOfRooms: number | string;
  numberOfBathrooms: number | string;
  typeOfParking: string;
  price: number | string;
  priceForM2: number | string;
  location: string;
  appartmentClass: "Premium" | "Business" | "Comfort" | "Economy" | "";
  floors: number | string;
  appartmentState: "With repair" | "Without repair" | "";
  currency: "UAH" | "USD" | "EUR" | "";
  yearOfOperation: number | string;
  salesStatus: "Started" | "Finished" | "";
  lending: boolean;
  installments: boolean;
  mortgage: boolean;
  images: string[];
}

const ApartmentSchema = Yup.object({
  nameOfBuilding: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  numberOfRooms: Yup.number()
    .min(1, "Must be 1 room minimum")
    .max(10)
    .required("Required"),
  numberOfBathrooms: Yup.number()
    .min(1, "Must be 1 bathroom minimum")
    .max(4)
    .required("Required"),
  typeOfParking: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  price: Yup.number().required("Required").min(1).max(100000000),
  priceForM2: Yup.number().required("Required").min(1).max(10000000),
  location: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  appartmentClass: Yup.mixed()
    .oneOf(["Premium", "Business", "Comfort", "Economy"])
    .required("Required"),
  floors: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  appartmentState: Yup.mixed()
    .oneOf(["With repair", "Without repair"])
    .required("Required"),
  currency: Yup.mixed().oneOf(["UAH", "USD", "EUR"]).required("Required"),
  yearOfOperatio: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  salesStatus: Yup.mixed().oneOf(["Started", "Finished"]).required("Required"),
  lending: Yup.boolean(),
  installments: Yup.boolean(),
  mortgage: Yup.boolean(),
  images: Yup.array().of(Yup.string()),
});
// interface IState {
//   handlechange?: React.FormEventHandler<HTMLInputElement> | undefined;
// }

export const ApartmentPage: React.FC = () => {
  const initialValues: MyFormValues = {
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

  const [active, setActive] = useState(false);
  const [nameOfBuilding, setNameOfBuilding] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [numberOfBathrooms, setNumberOfBathrooms] = useState("");
  const [typeOfParking, setTypeOfParking] = useState("");
  const [price, setPrice] = useState("");
  const [priceForM2, setPriceForM2] = useState("");
  const [location, setLocation] = useState("");

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
            values: MyFormValues,
            { setSubmitting }: FormikHelpers<MyFormValues>
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
                    onChange={() => setNameOfBuilding(nameOfBuilding)}
                  />
                  <InputField
                    name="numberOfRooms"
                    placeholder="Number of rooms"
                    className="w-300px h-8.5 mr-30px mb-8"
                    onChange={() => setNumberOfRooms(numberOfRooms)}
                  />
                  <InputField
                    name="numberOfBathrooms"
                    placeholder="Number of bathrooms"
                    className="w-300px h-8.5 mr-30px mb-8"
                    onChange={() => setNumberOfBathrooms(numberOfBathrooms)}
                  />
                  <InputField
                    name="typeOfParking"
                    placeholder="Type of parking"
                    className="w-300px h-8.5 mr-30px mb-8"
                    onChange={() => setTypeOfParking(typeOfParking)}
                  />
                  <InputField
                    name="price"
                    placeholder="Price"
                    className="w-300px h-8.5 mr-30px mb-8"
                    onChange={() => setPrice(price)}
                  />
                  <InputField
                    name="priceForM2"
                    placeholder="Price for m2"
                    className="w-300px h-8.5  mr-30px mb-8"
                    onChange={() => setPriceForM2(priceForM2)}
                  />
                </div>
                <InputField
                  name="location"
                  placeholder="Location (City, street)"
                  className="w-630px h-8.5  mb-8"
                  onChange={() => setLocation(location)}
                />
                <div className="flex flex-wrap">
                  <Select
                    name="appartmentClass"
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
                    name="appartmentState"
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
                  <ToggleButton label="Landing" />
                  <ToggleButton label="Installments" />
                  <ToggleButton label="Mortgage" />
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
              disabled
              label="Save"
              className="mt-53px disabled:bg-green-inactive"
            />
          </Form>
        </Formik>
      </div>
    </>
  );
};
