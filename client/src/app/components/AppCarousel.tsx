// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// interface Props {
//   products: any[]
// }

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// export default function SwipeableTextMobileStepper({ products }: Props) {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = products.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1, objectPosition: 'center'}}>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//       >
//         {products.map((step, index) => (
//           <div key={index}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   display: 'block',
//                   maxWidth: 800,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.pictureUrl}
//                 alt=""
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         sx={{ bgcolor: 'secondary.main' }}
//         nextButton={
//           <Button
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft sx={{ fontSize: 32 }} />
//             ) : (
//               <KeyboardArrowRight sx={{ fontSize: 32 }} />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight sx={{ fontSize: 32 }} />
//             ) : (
//               <KeyboardArrowLeft sx={{ fontSize: 32 }} />
//             )}
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

export {
  
}