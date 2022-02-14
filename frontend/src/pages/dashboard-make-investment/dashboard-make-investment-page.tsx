import Button from "components/common/button/button";
import { Typography } from "components/common/typography/typography";
import { Form, Formik } from "formik";
import React from "react";
import { InvestmentDetails } from "./components/investment-details/investment-details";
import { DetailsCompany } from "./components/make-investment-datails-company/make-investment-details-company";
import { PaymentInformation } from "./components/make-investment-payment-information/make-investment-payment-informatiom";
import { MakeInvestmentSchema } from "./makeInvestmentSchema";

export const DashboardMakeInvestmentPage: React.FC = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        country: '',
        street: '',
        companyName: '',
        city: '',
        zipCode: '',
        nameOfBank: '',
        cardNumber: '',
        cvv: '',
        nameOfCard: '',
        expirationYear: '',
      }}
      validationSchema={MakeInvestmentSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <div className="flex flex-row pl-19 h-full">
          <div className="w-184 py-14 border-r border-background">
            <Typography type="h4">
              Investment confirmation
            </Typography>
            <Typography type="body-large-medium" className="mt-6 w-159">
              To complete the invesment process, enter the following information. In the fileds concerning the address, enter your company address.
            </Typography>
            <DetailsCompany />
            <PaymentInformation />
            <Button nameBtn="primary" className="mt-12">
              Confirm
            </Button>
          </div>
          <div>
            <InvestmentDetails />
          </div>
        </div>
      </Form>
    </Formik>
  )
};
