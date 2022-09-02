import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InfoAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Responsibilities :</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'ul'}>
            <Typography component={'li'}>2+ years of experience with React</Typography>
            <Typography component={'li'}>1+ years of experience with Python or node.js</Typography>
            <Typography component={'li'}>Experience with AWS, Linux, or DevOps - an advantage</Typography>
            <Typography component={'li'}>Familiarity with network architecture/cybersecurity concepts - an advantage</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Requirements : </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography component={'ul'}>
            <Typography component={'li'}>2+ years of experience with React</Typography>
            <Typography component={'li'}>1+ years of experience with Python or node.js</Typography>
            <Typography component={'li'}>Experience with AWS, Linux, or DevOps - an advantage</Typography>
            <Typography component={'li'}>Familiarity with network architecture/cybersecurity concepts - an advantage</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
