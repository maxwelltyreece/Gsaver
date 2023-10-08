import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Register() {
    const { currentColor } = useStateContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Add your authentication logic here
        if (username === 'your_username' && password === 'your_password') {
            setIsLoggedIn(true);
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    return isLoggedIn ? (
        <Navigate to="/home" />
        ) : (
        <>
        <Box sx={{ width: 1 }} className="mt-10">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4">
                </Box>
                <Box gridColumn="span 4">
                    <Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat'>
                        <div className='text-center'>
                            <div><Typography className='mb-8 p-3 rounded fs-36' style={{backgroundColor: currentColor }}>Login</Typography></div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='text-center mt-10'
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='text-center mt-10'
                                />
                            </div>
                            <div className='mt-10'>
                                <button onClick={handleLogin} style={{ background: currentColor }} className='rounded px-4 py-2'>Login</button>
                            </div>
                        </div>
                    </Item>
                </Box>
                <Box gridColumn="span 4">
                </Box>
            </Box>
        </Box>
        </>
    );
}

export default Register;