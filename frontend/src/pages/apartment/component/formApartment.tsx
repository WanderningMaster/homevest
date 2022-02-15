import React from "react";
import { Formik, Form } from "formik";
import { Title } from "./title";
import Button from "components/common/button/button";
import { ApartmentSchema } from "../apartmentSchema";
import { ApartmentProps } from "../types/apartment-props.interface";
import { InputApartmentField } from "./inputFieldApartment";
import { Select } from "components/common/select/select";
import ToggleButton from "components/common/button/toggleBtn";
import { ReactComponent as ImagesLoad } from "../../../assets/images/images-load.svg";
import clsx from "clsx";
import { LabelSelectApartment } from "./labelSelectApartment";

const FormApartment: React.FC = () => {
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
  return (
    <div className="flex item-center justify-center mx-auto">
      <div className="relative  w-1290px flex flex-col">
        <div className=" absolute flex justify-center items-center top-36 ">
          <Formik
            initialValues={initialValues}
            validationSchema={ApartmentSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => {
              const {
                values,
                handleSubmit,
                handleChange,
                setFieldValue,
                dirty,
              } = props;
              return (
                <Form
                  className="items-center  text-body-small text-green"
                  onSubmit={handleSubmit}
                >
                  <Title />
                  <div className="flex flex-row justify-center">
                    <div className=" w-1/2 ">
                      <div className="flex flex-wrap grid-col-2 gap-30px">
                        <InputApartmentField
                          name="nameOfBuilding"
                          label="Name of building"
                          value={values.nameOfBuilding}
                          onChange={handleChange}
                          className={clsx("mr-30px", {
                            "border-green": dirty,
                          })}
                        />
                        <InputApartmentField
                          name="numberOfRooms"
                          label="Number of rooms"
                          value={values.numberOfRooms}
                          onChange={handleChange}
                          className={clsx({ "border-green": dirty})}
                        />
                        <InputApartmentField
                          name="numberOfBathrooms"
                          label="Number of bathrooms"
                          value={values.numberOfBathrooms}
                          onChange={handleChange}
                          className={clsx("mr-30px", {
                            "border-green": dirty,
                          })}
                        />
                        <InputApartmentField
                          name="typeOfParking"
                          label="Type of parking"
                          value={values.typeOfParking}
                          onChange={handleChange}
                          className={clsx({ "border-green": dirty})}
                        />
                        <InputApartmentField
                          name="price"
                          label="Price"
                          value={values.price}
                          onChange={handleChange}
                          className={clsx("mr-30px", {
                            "border-green": dirty,
                          })}
                        />
                        <InputApartmentField
                          name="priceForM2"
                          label="Price for m2"
                          value={values.priceForM2}
                          onChange={handleChange}
                          className={clsx({ "border-green": dirty })}
                        />
                      </div>
                      <InputApartmentField
                        name="location"
                        label="Location (City, street)"
                        value={values.location}
                        onChange={handleChange}
                        className={clsx("w-630px", {
                          "border-green": dirty,
                        })}
                      />
                      <div className="flex flex-wrap grid-col-2 gap-30px">
                        <div className=" relative  mb-8">
                          <Select
                            name="appartmentClass"
                            options={[
                              { value: "Premium", label: "Premium" },
                              { value: "Business", label: "Business" },
                              { value: "Comfort", label: "Comfort" },
                              { value: "Economy", label: "Economy" },
                            ]}
                            placeholder="Apartment class"
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5 mr-30px",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                            value={values.appartmentClass}
                            onChange={(option) =>
                              setFieldValue("appartmentClass", option)
                            }
                          />
                          {values.appartmentClass !== "" && (
                            <LabelSelectApartment labelName="Apartment class" />
                          )}
                        </div>
                        <div className=" relative  mb-8">
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
                            value={values.floors}
                            onChange={(option) =>
                              setFieldValue("floors", option)
                            }
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5 ",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                          />
                          {values.floors !== "" && (
                            <LabelSelectApartment labelName="Floors" />
                          )}
                        </div>
                        <div className=" relative  mb-8">
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
                            value={values.appartmentState}
                            onChange={(option) =>
                              setFieldValue("appartmentState", option)
                            }
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5 mr-30px",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                          />
                          {values.appartmentState !== "" && (
                            <LabelSelectApartment labelName="Apartment state" />
                          )}
                        </div>
                        <div className=" relative  mb-8">
                          <Select
                            name="currency"
                            options={[
                              { value: "hryvnia", label: "UAH" },
                              { value: "dollar", label: "USD" },
                            ]}
                            placeholder="Currency"
                            value={values.currency}
                            onChange={(option) =>
                              setFieldValue("currency", option)
                            }
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                          />
                          {values.currency !== "" && (
                            <LabelSelectApartment labelName="Currency" />
                          )}
                        </div>
                        <div className=" relative  mb-8">
                          <Select
                            name="yearOfOperation"
                            options={[
                              { value: "Already in", label: "Already in" },
                              { value: "2021", label: "2021" },
                              { value: "2022", label: "2022" },
                              { value: "2023+", label: "2023+" },
                            ]}
                            placeholder="Year of operation"
                            value={values.yearOfOperation}
                            onChange={(option) =>
                              setFieldValue("yearOfOperation", option)
                            }
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5 mr-30px",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                          />
                          {values.yearOfOperation !== "" && (
                            <LabelSelectApartment labelName="Year of operation" />
                          )}
                        </div>
                        <div className=" relative  mb-8">
                          <Select
                            name="salesStatus"
                            options={[
                              { value: "Not started", label: "Not started" },
                              { value: "Booked", label: "Booked" },
                              { value: "Started", label: "Started" },
                            ]}
                            placeholder="Sales status"
                            value={values.salesStatus}
                            onChange={(option) =>
                              setFieldValue("salesStatus", option)
                            }
                            overrideClassNames={{
                              Control: () => "w-300px h-8.5",
                              Menu: () => "w-300px ",
                              Option: () => "w-72",
                            }}
                          />
                          {values.salesStatus !== "" && (
                            <LabelSelectApartment labelName="Sales status" />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-630px">
                        <ToggleButton
                          label="Lending"
                          getSwitched={(checked) => (values.lending = checked)}
                        />
                        <ToggleButton
                          label="Installments"
                          getSwitched={(checked) =>
                            (values.installments = checked)
                          }
                        />
                        <ToggleButton
                          label="Mortgage"
                          getSwitched={(checked) => (values.mortgage = checked)}
                        />
                      </div>
                    </div>
                    <div className="flex  w-1/2 ml-30px">
                      <div className=" flex flex-col justify-center items-center text-center w-630px h-232px border border-dashed border-grey border-box rounded-8px">
                        <ImagesLoad className="w-80 h-60px cursor-pointer" />
                        <p className="text-center text-black font-semibold text-body leading-body mt-6">
                          Drag or click to browse photos of your property (up to
                          6 photos)
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
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default FormApartment;
