import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import './home.css'

const Home = () => {

  const data = [
    { id: 0, value: 10, name: 'series A' },
    { id: 1, value: 15, name: 'series B' },
    { id: 2, value: 20, name: 'series C' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between p-4'>
      <div className=' p-8  shadow-xl bg-white rounded-md cardContainer'>
        <div className='flex gap-8'>
         <p className='font-semibold text-black text-lg'>Assigned Issue</p>
         <p className=''><AssignmentIndIcon className=' ' fontSize='large'/></p>  
        </div>
        <div className='flex items-center justify-between mt-2'>
        <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>10</p>
        <p>+12% this month</p>
        </div>
      </div>
      <div className=' p-8  shadow-xl bg-white rounded-md cardContainer'>
        <div className='flex gap-8'>
         <p className='font-semibold text-black text-lg'>Solved Issue</p>
         <p className=''><AssignmentTurnedInIcon fontSize='large' /></p>  
        </div>
        <div className='flex items-center   gap-6 mt-2'>
        <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>10</p>
        <p>+12% this month</p>
        </div>
      </div>
      <div className=' p-8  shadow-xl bg-white rounded-md cardContainer'>
        <div className='flex gap-8'>
         <p className='font-semibold text-black text-lg'>Rejected Issue</p>
         <p className=''><ThumbDownAltIcon className=' ' fontSize='large'/></p>  
        </div>
        <div className='flex items-center justify-between mt-2'>
        <p className='text-center mt-3 py-2 text-lg bg-gray-800 w-10 text-white rounded-lg'>10</p>
        <p>+12% this month</p>
        </div>
      </div>

      </div>
      <div className='p-4 mt-5 shadow-xl mb-5 cardContainer bg-white flex flex-col  ' style={{height:"400px",width:"700px"}}>
        <h3 className='mb-4 bg-gray-800 text-white p-2 rounded-md ' >Pie Chat That demonstrate IT ItStaffMembers Action </h3>
      <div className='flex items-center justify-center'>
      <PieChart width={400} height={200} sx={{mx:'auto' }}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
    <div className='flex flex-col'>
      <div className='flex gap-4 p-2 items-center'>
      <div className='bg-[#00C49F] w-10 h-10' />
        <p className='font-semibold text-lg'>Assigned Issue</p>
      </div>
      <div className='flex gap-4 p-2 items-center'>
        <div className='bg-[#0088FE] w-10 h-10' />
        <p className='font-semibold text-lg'>Solved Issue</p>
      </div>
      <div className='flex gap-4 p-2 items-center'>
      <div className='bg-[#FFBB28] w-10 h-10' />
        <p className='font-semibold text-lg'>Rejected Issue</p>
      </div>

    </div>

      </div>
      
      </div>
      
    </div>
  )
}

export default Home