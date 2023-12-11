import React from 'react'
import SparkLine from '../Charts/SparkLine'
import { Pie } from '..'
import { SparklineAreaData, ecomPieChartData } from '../../assets/dummy'
import { useStateContext } from '../../Context/ContextProvider';

const TotalEarning = () => {
    
    const { currentColor, currentMode } = useStateContext();

    return (
        <div>
            <div
                className=" rounded-2xl md:w-400  p-4 m-3"
                style={{ backgroundColor: currentColor }}
            >
                <div className="flex justify-between items-center ">
                    <p className="font-semibold text-white text-2xl">Earnings</p>

                    <div>
                        <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                        <p className="text-gray-200">Monthly revenue</p>
                    </div>
                </div>

                <div className="mt-4">
                    <SparkLine currentColor={currentColor}
                        id="column-sparkLine"
                        height="100px" type="Column"
                        data={SparklineAreaData}
                        width="320"
                        color="rgb(242, 252, 253)" />
                </div>
            </div>

            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
                                 rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                <div>
                    <p className="text-2xl font-semibold ">$43,246</p>
                    <p className="text-gray-400">Yearly sales</p>
                </div>

                <div className="w-40">
                    <Pie id="pie-chart"
                        data={ecomPieChartData}
                        legendVisiblity={false}
                        height="160px" />
                </div>
            </div>
        </div>
    )
}

export default TotalEarning