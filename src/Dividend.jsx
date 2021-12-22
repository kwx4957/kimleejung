import './dividend.css';
import React from 'react';
import Api from './Api';
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
=======
import { ComposedChart, Area, LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { stat } from 'fs';

>>>>>>> d7c1ae7f5427f6a68391b7b12dd16ce0605183e8
const data = [
  {
    name: '2017년',
    uv: 1220,
    주가: 111
  },
  {
    name: '2018년',
    uv: 3000,
    주가: 1200
  },

  {
    name: '2019년',
    uv: 3000,
    주가: 1600
  },
  {
    name: '2020년',
    uv: 2000,
    주가: 1700
  },
  {
    name: '2021년',
    uv: 2780,
    주가: 2000
  },
];

const Dividend = () => {
  const { state } = useLocation();

  return (
    
    <>
    <div>
      {/* 로고 위치 및 크기 지정*/}
      <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'></img>
      {/* <p>{ state.number }</p> */}
      <p className="company-name">{ state.company}</p><br/>
      {/* <p>{ state.law_number }</p> */}
    </div>
    
    {/* mo_main 그래프*/}
    <h4>간단한 주가 선 차트</h4>
    <ResponsiveContainer width="50%" aspect={2}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 1,
            right: 50,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />

          <Line type="monotone" dataKey="주가" stroke="#50bcdf" />
        </LineChart>
      </ResponsiveContainer><br/>
      <div>
        <h7 className="ex_divide">예상배당금</h7>
        <Api name={ state.company } crno={ state.law_number } />
      </div>
   
    {/* mo_ex_divide 그래프*/}
    <h4> 자신의 배당금 예상 </h4>
    <ResponsiveContainer width="50%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{stroke:"black"}}/>
          <YAxis tick={{stroke:"black"}}/>

          <Bar dataKey="uv" fill="#50bcdf" />
        </BarChart>
      </ResponsiveContainer>
    
    {/* mo_divide_history 그래프*/}
      <h4> 과거 배당금 내역 & 배당률 </h4>
      <ResponsiveContainer width="50%" aspect={3}>
      <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{stroke:"black"}} />
          <YAxis tick={{stroke:"black"}} />
         
          <Bar dataKey="uv" barSize={20} fill="#50bcdf" />
          <Line type="monotone" dataKey="주가" stroke="green" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}

export default Dividend;