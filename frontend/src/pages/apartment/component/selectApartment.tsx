// import React from 'react';
// import { Select } from "components/common/select/select";

// interface IProps{
//     label: string;
//     name: string;
//     options: Array<{
//         value: string | number;
//         label: string;
//     }>
// }

// export const SelectApartment:React.FC<IProps> = (props) => {
//     const { label, name, options, ...restHTML } = props;
//     return (
//           <div className=" relative  mb-8">
//                           <Select
//                             name="appartmentClass"
//                             options={[
//                               { value: "Premium", label: "Premium" },
//                               { value: "Business", label: "Business" },
//                               { value: "Comfort", label: "Comfort" },
//                               { value: "Economy", label: "Economy" },
//                             ]}
//                             placeholder="Apartment class"
//                             overrideClassNames={{
//                               Control: () => "w-300px h-8.5 mr-30px",
//                               Menu: () => "w-300px ",
//                               Option: () => "w-72",
//                             }}
//                             value={values.appartmentClass}
//                             onChange={(option) =>
//                               setFieldValue("appartmentClass", option)
//                             }
//                           />
//                           {values.appartmentClass !== "" && (
//                             <LabelSelectApartment labelName="Apartment class" />
//                           )}
//                         </div>
//     )
// }
export{}