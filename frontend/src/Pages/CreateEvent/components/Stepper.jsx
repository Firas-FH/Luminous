import React, { useEffect, useState, useRef } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    let iconSrc = '';
    switch (index) {
      case 0:
        // icon = <img src={'./Picture/1step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/1step.svg' : './Picture/1step.svg';
        break;
      case 1:
        // icon = <img src={'./Picture/2step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/2step.svg' : './Picture/22step.svg';
        break;
      case 2:
        // icon = <img src={'./Picture/3step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/3step.svg' : './Picture/33step.svg';
        break;
      case 3:
        // icon = <img src={'./Picture/4step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/4step.svg' : './Picture/44step.svg';
        break;
      case 5:
        // icon = <img src={'./Picture/5step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/6step.svg' : './Picture/66step.svg';
        break;
      default:
        // icon = <img src={'./Picture/4step.svg'} style={{ width: 20 }} alt=''></img>;
        iconSrc = step.completed ? './Picture/5step.svg' : './Picture/55step.svg';
        break;
    }

    return (
      <div
        key={index}
        className={index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}
      >
        <div className='relative flex flex-col items-center'>
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected
                ? 'bg-[var(--border-color)] text-white font-bold border border-[var(--border-color)]'
                : 'text-[var(--border-color)]'
              }`}
          >
            {/* Dispaly number */}
             {/* Display the selected icon */}
             <img src={iconSrc} style={{ width: '50%' }} alt={`Step ${index + 1}`}/>
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? 'text-gray-900' : 'text-gray-400'
              }`}
          >
            {/* Display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? 'border-[var(--border-color)]' : 'border-gray-300'
            }`}
        >
          {/* Display line */}
        </div>
      </div>
    );
  });

  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
      {displaySteps}
    </div>
  );
};

export default Stepper;
