import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const deliveryInformationData = [
  { question: 'Is cake delivery available in all cities?', answer: 'Yes, our cake delivery service is available in all cities.' },
  { question: 'What is the delivery time for cake orders?', answer: 'The delivery time for cake orders varies based on the location. In most cases, cakes are delivered within 1-3 hours.' },
  { question: 'Do you offer same-day cake delivery?', answer: 'Yes, we offer same-day cake delivery for orders placed before noon.' },
  { question: 'Is there an additional charge for cake delivery?', answer: 'The delivery charges for cakes may vary based on your total price. You can view the delivery charges during the checkout process.' },
  { question: 'What precautions are taken to ensure the cake arrives in perfect condition?', answer: 'We take great care in packaging our cakes to ensure they arrive in perfect condition. Cakes are securely boxed to prevent any damage during transit.' },
  { question: 'Do you deliver cakes on weekends and holidays?', answer: 'Yes, we offer cake delivery services on weekends and holidays. However, it\'s advisable to check the specific delivery schedule during the checkout process.' },
];

export default function DeliveryInformationPage() {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
        Delivery Information
      </Typography>

      {deliveryInformationData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            sx={{ 
              backgroundColor: 
                expanded === `panel${index + 1}` ? 'secondary.main' 
                : 'primary.main' 
            }}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
