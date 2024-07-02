import React from 'react'
import './StepperControlStyle.css'

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            {/* back button */}
            {/* {currentStep !== 1 && ( */}
                <button
                    onClick={() => handleClick("back")}
                    className={`backButton flex items-center justify-center bg-white text-slate-400 uppercase py-2 px-4 font-semibold
            cursor-pointer border-2 border-gray-400 hover:bg-gray-400 hover:text-white
            transition duration-200 ease-in-out ${currentStep === 1 ? "cna cursor-not-allowed opacity-50" : ""}`}
                    disabled={currentStep === 1}
                >
                Back
                </button>
            {/* )} */}

            {/* next button */}
            <button
                onClick={() => handleClick("next")}
                className="nextButton bg-[var(--headers-color)] text-white uppercase py-2 px-4 font-semibold
             cursor-pointer hover:text-white
            transition duration-200 ease-in-out">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl
