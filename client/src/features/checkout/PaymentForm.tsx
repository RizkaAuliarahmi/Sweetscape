import { useState } from "react";
import { Box, Typography, Paper, List, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import AppBox from "../../app/components/AppBox";

const paymentMethods = [
  { value: 'cashOnDelivery', label: 'Cash On Delivery' },
  { value: 'bankTransfer', label: 'Bank Transfer' },
];

const bankOptions = ['Bank A', 'Bank B', 'Bank C'];

export default function PaymentForm() {
  const { control } = useFormContext();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodClick = (method: any) => {
    if (selectedMethod === method) {
      setSelectedMethod(null);
    } else {
      setSelectedMethod(method);
    }
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Payment Method
      </Typography>
      <List>
        <Box sx={{ display: 'flex' }}>
          {paymentMethods.map((method) => (
            <Controller
              key={method.value}
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <AppBox
                  onClick={() => {
                    field.onChange(method.value);
                    handleMethodClick(method.value);
                  }}
                  selected={selectedMethod === method.value}
                  label={method.label}
                />
              )}
            />
          ))}
        </Box>
      </List>
      {selectedMethod === 'bankTransfer' && (
        <>
          <Typography variant="h6" gutterBottom>
            Select a Bank:
          </Typography>

          <RadioGroup
            aria-label="bank"
            name="bank"
          >
            {bankOptions.map((bank) => (
              <FormControlLabel
                key={bank}
                value={bank}
                control={<Radio/>}
                label={bank}               
              />
            ))}
          </RadioGroup>
        </>
      )}
    </Paper>
  );
}
