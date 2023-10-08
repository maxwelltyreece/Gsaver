import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useStateContext } from '../contexts/ContextProvider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ColumnLayout() {

    const { currentColor } = useStateContext();

    return (
        <Box sx={{ width: 1 }} className="mt-10">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4">
                    <Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
                        <div className='text-center'>
                            <div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Get in Touch</Typography></div>
                            <div>
                                <p className='mt-3 text-center p-4'>
                                    Got questions or need assistance with our student banking app? Our dedicated support team is here to help. Whether it's account features, transactions, or any other banking queries, we're just a message or call away. We're committed to making your student banking experience as smooth as possible.
                                </p>
                            </div>
                        </div>
                    </Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
                        <div className='text-center'>
                            <div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Need help saving?</Typography></div>
                            <div>
                                <p className='mt-3 text-center p-4'>
                                To save money as a student, start with a budget to track your spending. Opt for cost-effective choices like cooking at home and buying used textbooks. Make the most of student discounts and consider opening a savings account, even with small contributions. Setting clear financial goals and practicing discipline will help you build savings and develop lifelong money management skills.
                                </p>
                            </div>
                        </div>
                    </Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
                        <div className='text-center'>
                            <div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Want to improve your credit?</Typography></div>
                            <div>
                                <p className='mt-3 text-center p-4'>
                                    Improving your credit as a student is essential. Start by responsibly using a student credit card or becoming an authorized user on a trusted card. Manage student loans by making on-time payments and exploring repayment plans. Regularly check your credit report for accuracy. Many universities offer financial literacy resources to help.
                                </p>
                            </div>
                        </div>
                    </Item>
                </Box>
            </Box>
        </Box>
    );
}

const GetInTouch = () => (
    <>
    <div className="m-2 md:m-10 mt-24 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat bg-cover bg-center rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-left .fs-1'> Contact Us </p>
    </div>

    <div className="m-2 md:m-10 mt-24 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat bg-cover bg-center rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-center .fs-2'> How can we help?</p>
        <ColumnLayout/>
    </div>

    <div className="m-2 md:m-10 mt-24 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat bg-cover bg-center rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
        <p className='text-left .fs-2 mb-10'> FAQs </p>
        <Accordion className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>How do I open a student banking account?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Opening a student banking account is easy! Simply download our mobile app or visit our website to start the application process. Follow the prompts, provide the necessary identification and enrollment documents, and you'll be on your way to accessing all the benefits of a student banking account. Don't forget to check our website for any special offers or promotions for new student account holders.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Can I link my student banking account to a digital payment service like Apple Pay or Google Pay?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes, you can! We support popular digital payment services like Apple Pay, Google Pay, and Samsung Pay. After opening your student banking account, download your preferred digital payment app, add your student debit card, and start making easy and secure payments with your mobile device. It's a convenient way to pay for purchases on and off-campus.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
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

export default GetInTouch;