import { Typography } from 'components/common/typography/typography';
import { mockData } from 'pages/dashboard-make-investment/mock-data/mock-data';
import React from 'react';

export const InvestmentDetails: React.FC = () => {
  return (
    <div className="mt-14 ml-8">
      <Typography type="h4">
        Investment details
      </Typography>
      <div className="shadow-card-dashboard h-96 w-130 rounded-lg mt-6 p-6">
        {Object.keys(mockData).map((item) => (
          <div key={item} className="flex justify-between mb-6">
            <Typography type="body-medium">
              {item}
            </Typography>
            <Typography type="body-medium" className="text-green">
              {mockData[item as keyof typeof mockData]}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}