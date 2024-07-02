import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import First from "./components/steps/First";
import Second from "./components/steps/Second";
import Third from "./components/steps/Third";
import Fourth from "./components/steps/Fourth";
import Fifth from "./components/steps/Fifth";
import Sixth from "./components/steps/Sixth";

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = ["event and date", "venue", "decoration", "food and invitees","extra","final"];

  const displayStepFunction = (step) => {
    switch (step) {
      case 1:
        return <First/>
      case 2:
        return <Second/>
      case 3:
        return <Third/>
        case 4:
        return <Fourth/>
        case 5:
        return <Fifth/>
        case 6:
        return <Sixth/>
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    direction === "next" ? newStep++ : newStep--;

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className="w-1/2 mx-auto shadow-xl pd-2 pb-0.5 bg-[var(--secondary-bg)]">
      {/* Stepper */}
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display Components */}

        <div className="my-10 pl-10 pt-5 pb-5" >
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}>
            {displayStepFunction(currentStep)}
          </StepperContext.Provider>
        </div>

      </div>
      {/* Navigation Controls*/}
      {/* { currentStep !== steps.length && */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
 {/* } */}
    </div>
  );
}

export default App;