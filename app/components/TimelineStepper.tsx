import React from "react";

interface TimelineStepperProps {
  steps: string[];
}

const TimelineStepper: React.FC<TimelineStepperProps> = ({ steps }) => {
  return (
    <ol className="relative text-black border-s border-[#757677] ml-4">
      {steps.map((step, index) => (
        <li key={index} className={`mb-20  ms-6 `}>
         <span
            className={`absolute flex items-center justify-center w-6 h-6 bg-white-100 rounded-full -start-3 ring-2 dark:ring-[#2A4466] `}
          >
            <span
              className={`w-5 h-5 bg-[#2A4466] rounded-full`}
            />
          </span>
          <h3 className={`font-medium leading-tight m-6`}> {index+1}. {step}</h3>
        </li>
      ))}
    </ol>
  );
};

export default TimelineStepper;
