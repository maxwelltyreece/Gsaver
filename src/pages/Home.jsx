import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {Link as RouterLink} from 'react-router-dom'

import {Card, CardActionArea, CardContent,Avatar,Paper} from '@mui/material' ;

import Natwest from '../data/Natwest.png'
import Santander from '../data/santander.jpg'
import ChatBotIcon from '../data/ChatBotIcon.png'


import {Button} from '../components';
import {recentTransactions,dropdownData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        
        <Card className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-xl w-full lg:w-80 m-3 bg-no-repeat bg-cover bg-center '>
          <CardActionArea component={RouterLink} to={'/transactions'}>              
            <CardContent className='font-bold flex justify-between items-center '> 
              <div>
                <p className="font-bold text-gray-400">Natwest</p>
                <p className="text-2xl">£78.04</p>
                <p className="text-sm text-gray-400  mt-1">Current Account</p>
              </div>
              <Avatar src={Natwest} sx={{ width: 54, height: 54 }}/>
            </CardContent> 
          </CardActionArea>
        </Card>

        <Card className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-xl w-full lg:w-80 m-3 bg-no-repeat bg-cover bg-center '>
          <CardActionArea component={RouterLink} to={'/transactions'}>              
            <CardContent className='font-bold flex justify-between items-center '> 
              <div>
                <p className="font-bold text-gray-400">Natwest</p>
                <p className="text-2xl">£3,064.67</p>
                <p className="text-sm text-gray-400  mt-1">Savings</p>
              </div>
              <Avatar src={Natwest} sx={{ width: 54, height: 54 }}/>
            </CardContent> 
          </CardActionArea>
        </Card>

        <Card className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-xl w-full lg:w-80 m-3 '>
          <CardActionArea component={RouterLink} to={'/transactions'}>              
            <CardContent className='font-bold flex justify-between items-center '> 
              <div>
                <p className="font-bold text-gray-400">Santander</p>
                <p className="text-2xl">-£64.38</p>
                <p className="text-sm text-gray-400  mt-1">Student Account</p>
              </div>
              <Avatar src={Santander} sx={{ width: 54, height: 54 }}/>
            </CardContent> 
          </CardActionArea>
        </Card>
        
      </div>

      
      <div className='flex mx-24 mt-4 gap-6'>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          
        </div>

        <div className='flex grid w-full gap-6'>
          <Paper className='flex rounded-3xl opacity-20 hover:opacity-40'  style={{backgroundColor: currentColor, }}>
            <button
                type="button"
                
                className="text-xl rounded-full  p-3 hover:bg-light-gray block" 
                
              >
              Need Help?
            </button>
          </Paper>

          <Paper className='w-full rounded-3xl opacity-50'  style={{backgroundColor: currentColor, }}>
            <button
                type="button"
                
                className="text-xl rounded-full  p-3 hover:bg-light-gray block " 
                
              >
              Need Help?
            </button>
          </Paper>

        </div>

        
      </div>
    </div>
  );
};

export default Home;