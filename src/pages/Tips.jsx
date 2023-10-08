import React from 'react';
import Typography from '@mui/material/Typography';
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


function TipsTiles() {

    const { currentColor } = useStateContext();

    return (
        <Box sx={{ width: 1 }} className="mt-10">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 8">
                    <Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
                        <div className='text-center'>
                            <div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Want to improve your credit?</Typography></div>
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

const Tips = () => (
    <>
    <div className='p-10'>
        <TipsTiles/>
    </div>
    </>
);

export default Tips;