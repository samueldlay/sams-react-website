import { Button, Image } from "@nextui-org/react"
import { useEffect, useState } from "react";

const cards = [
  <Image
    alt="Card background"
    className="object-cover rounded-xl"
    src="https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x2.jpg?w=1638&h=1092"
    width={320}
  />,
  <Image
    alt="Card background"
    className="object-cover rounded-xl"
    src="https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x2.jpg?w=1638&h=1092"
    width={320}
  />,
  <Image
    alt="Card background"
    className="object-cover rounded-xl"
    src="https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x2.jpg?w=1638&h=1092"
    width={320}
    height={320}
  />
]

export default function Portfolio() {
  const beginningIndex = 0;
  // const nextStep = 1;
  // const previousStep = -1;
  const steps = cards.length;
  const [currentStep, setCurrentStep] = useState(beginningIndex);
  // const [stepCount, setStepCount] = useState(0);

  const handleStepThreshold = (step: number) => {
    const stepThreshold =
      currentStep === beginningIndex
        ? (steps + step) % steps
        : (currentStep + step) % steps;
    setCurrentStep(stepThreshold);
  };

  useEffect(() => { console.log(currentStep) }, [currentStep])

  return (
    <div>
      <Button onClick={() => handleStepThreshold(-1)}>Prev</Button>
      <Button onClick={() => handleStepThreshold(1)}>Next</Button>
      {cards[currentStep]}
    </div>
  )
}
