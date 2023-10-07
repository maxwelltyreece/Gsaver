import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GetInTouch = () => (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-left .fs-1'> Contact Us </p>
    </div>

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-center .fs-2'> How can we help?</p>
        <div className='container text-center'>
            <div className='column'>
                <div className='col-4'>
                    <p>col 1</p>
                </div>
                <div className='col-4'>
                    <p>
                        col 2
                    </p>
                </div>
                <div className='col-4'>
                    <p> col 3</p>
                </div>
            </div>
        </div>
    </div>

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-left .fs-2 mb-10'> FAQs </p>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>How do I open a student banking account?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Opening a student banking account is easy! Simply download our mobile app or visit our website to start the application process. Follow the prompts, provide the necessary identification and enrollment documents, and you'll be on your way to accessing all the benefits of a student banking account. Don't forget to check our website for any special offers or promotions for new student account holders.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Can I link my student banking account to a digital payment service like Apple Pay or Google Pay?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes, you can! We support popular digital payment services like Apple Pay, Google Pay, and Samsung Pay. After opening your student banking account, download your preferred digital payment app, add your student debit card, and start making easy and secure payments with your mobile device. It's a convenient way to pay for purchases on and off-campus.
                </Typography>
            </AccordionDetails>
        </Accordion><Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Are there any fees associated with my student banking account?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    We understand that students need financial flexibility, which is why our student banking accounts are designed to be fee-friendly. There are typically no monthly maintenance fees or minimum balance requirements for student accounts. Plus, you can enjoy fee waivers on ATM withdrawals at our partner ATMs and have access to a wide network of fee-free ATMs across the country. We want to make managing your money as stress-free as possible while you focus on your studies.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    </>
);
