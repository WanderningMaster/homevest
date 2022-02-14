import * as Yup from "yup";

export const ApartmentSchema = Yup.object({
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
  price: Yup.number().required("Required").min(1).max(10000000000),
  priceForM2: Yup.number().required("Required").min(1).max(100000000),
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
