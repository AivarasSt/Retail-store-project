import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  styled,
} from '@mui/material';
import ClientForm from './client-form';
import Review from './review';

const steps = ['Shipping address', 'Review your order'];
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ':hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-labelContainer': {
    color: theme.palette.secondary.main,
  },
}));

const Checkout: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <ClientForm handleNext={handleNext} />;
      case 1:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StyledStepLabel>{label}</StyledStepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order will be ready for pick-up.
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <StyledButton onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </StyledButton>
              )}
              {activeStep === 0 ? null
                : (
                  <StyledButton
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </StyledButton>
                )}
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
