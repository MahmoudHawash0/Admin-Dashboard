import React from 'react';
import {
  HeroBanner, EarningCard, RevenueUpdates, TotalEarning,
  RecentTransactions, SalesOverview, WeeklyStats, MedicalProBranding, DailyActivities
} from '../Components';


const ECommerce = () => {

  return (
    <div className="mt-12">

      <div className="flex flex-wrap justify-center ">
        <HeroBanner />
        <EarningCard />
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <RevenueUpdates />
        <TotalEarning />
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <RecentTransactions />
        <SalesOverview />
      </div>

      <div className="flex flex-wrap justify-center">
        <WeeklyStats />
        <MedicalProBranding />
        <DailyActivities />
      </div>
    </div>
  );
};

export default ECommerce;