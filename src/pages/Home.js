
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import axios from 'axios';
import './home.css';

const Home = () => {
  const [counts, setCounts] = useState({
    submittedCount: 0,
    inProgressCount: 0,
    solvedCount: 0,
  });

  const userId=JSON.parse(localStorage.getItem("user")).others._id
  useEffect(() => {
    const fetchCounts = async () => {
      try {
       
        const response = await axios.get(`http://localhost:5600/api/issue/counts/${userId}`);
        setCounts(response.data);
      } catch (error) {
        console.error('Failed to fetch issue counts:', error);
      }
    };

    fetchCounts();
  }, []);

  const data = [
    { id: 0, value: counts.submittedCount, name: 'Submitted Issues' },
    { id: 1, value: counts.inProgressCount, name: 'In Progress' },
    { id: 2, value: counts.solvedCount, name: 'Solved Issues' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className='flex flex-col p-3 font-sans'>
      <div className='flex justify-between p-4'>
        <div className='p-8 shadow-xl bg-white rounded-md cardContainer'>
          <div className='flex gap-8'>
            <p className='font-semibold text-black text-lg'>Submitted Issue</p>
            <AssignmentIndIcon fontSize='large' />
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>{counts.submittedCount}</p>
            <p>+12% this month</p>
          </div>
        </div>
        <div className='p-8 shadow-xl bg-white rounded-md cardContainer'>
          <div className='flex gap-8'>
            <p className='font-semibold text-black text-lg'>In Progress</p>
            <AssignmentTurnedInIcon fontSize='large' />
          </div>
          <div className='flex items-center gap-6 mt-2'>
            <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>{counts.inProgressCount}</p>
            <p>+12% this month</p>
          </div>
        </div>
        <div className='p-8 shadow-xl bg-white rounded-md cardContainer'>
          <div className='flex gap-8'>
            <p className='font-semibold text-black text-lg'>Solved</p>
            <ThumbDownAltIcon fontSize='large' />
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>{counts.solvedCount}</p>
            <p>+12% this month</p>
          </div>
        </div>
      </div>
      <div className='p-4 mt-5 shadow-xl mb-5 cardContainer bg-white flex flex-col' style={{ height: '400px', width: '700px' }}>
        <h3 className='mb-4 bg-gray-800 text-white p-2 rounded-md'>Current  Submitted  Issue</h3>
          Latest Submitted Issue  ,fetch only one latest issue submitted by me
      </div>
    </div>
  );
};

export default Home;