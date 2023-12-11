import React from 'react'
import Button from '../Button'
import { IoIosMore } from 'react-icons/io'
import { useStateContext } from '../../Context/ContextProvider';
import product9 from '../../assets/product9.jpg';

const DailyActivities = () => {

    const { currentColor } = useStateContext();

    return (
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
                <p className="text-xl font-semibold">Daily Activities</p>
                <button type="button" className="text-xl font-semibold text-gray-500">
                    <IoIosMore />
                </button>
            </div>
            <div className="mt-10">
                <img
                    className="md:w-96 h-50 "
                    src={product9}
                    alt=""
                />
                <div className="mt-8">
                    <p className="font-semibold text-lg">The news coming soon!</p>
                    <p className="text-gray-400 ">By Johnathan Doe</p>
                    <p className="mt-8 text-sm text-gray-400">
                        This will be the small description for the news you have shown
                        here. There could be some great info.
                    </p>
                    <div className="mt-3">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Read More"
                            borderRadius="10px"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyActivities