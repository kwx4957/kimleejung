import './dividend.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip as RechartsTooltip, 
    Legend as RechartsLegend, 
    ResponsiveContainer 
} from 'recharts';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import InputSample from './InputSample';
import dayjs from "dayjs";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '과거 배당금 내역 & 배당률',
      },
    },
  };
  
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
    const navigate = useNavigate();
    const { state } = useLocation();
    const [error, setError] = useState();
    const [apis, setApi] = useState();
    const [loading, setLoading] = useState();
  
    const onBoard = (e) => {
      e.preventDefault();
      navigate('/board');
    }
  
    const sortData = (data) => {
      return data.sort((a, b) => {
        return Number(a.cashDvdnPayDt) - Number(b.cashDvdnPayDt);
      }).slice(-10);
    }
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때 error 와 users를 null설정
          setError(null);
          setApi(null);
          // loading을  true로 설정
          setLoading(true);
          const res = await axios.get('/getDiviInfo',{
            params: {
              pageNo : 1,
              numOfRows: 200,
              resultType: 'json',
              basDt: null,
              fnccmpNm: state.company,
              crno: state.law_number,
              serviceKey: 'H8M+zTGzEGjkWijFKjq4wni6P6SKhzbEalrHnkrdexbFlgkuWgDMviKNbCN9tqt2I8tTF5dEedbjV3QMHIkqxA=='
            },
          });
          const itemArr = res.data.response.body.items.item;
          setApi(itemArr)
          console.log('data', itemArr)
        } catch (e) {
          console.error(e)
          setError(e);
        }
        setLoading(false);
      };
      fetchUsers();
    }, [state]);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!apis) return null;
  
    
    return (
      <>
        로고 위치 및 크기 지정
        
        <div className='Dividend-header'>
        <div> 
          <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
          {/* 회사명 */}
          <p className="company-name">{ state.company }</p>
        </div>
        
        <form onSubmit={onBoard}>
        {/*게시판*/}
        <button className="Board_Botton">
          <img src="board.png" className='Board' alt="게시판"/><br/>
          <span className="Board_Text">게시판</span>
        </button>
      </form>
      </div>
        {/* mo_main 그래프*/}
  
  <div className='gr'>
    <div className='gr1'>
      <p className='gr-title'>*____간단한 주가 선 차트____*</p>
        <ResponsiveContainer aspect={2}>
          <LineChart
            data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <RechartsLegend />
            <Line type="monotone" dataKey="주가" stroke="#50bcdf" />
          </LineChart>
        </ResponsiveContainer><br/>
        </div>
  
    <div className='gr2'>
        <span>배당락 기준일 : { dayjs(sortData(apis)[sortData(apis).length - 1].dvdnBasDt).format('YYYY년 MM월 DD일') }</span>
        <span>배당 지급일 : { dayjs(sortData(apis)[sortData(apis).length - 1].cashDvdnPayDt).format('YYYY년 MM월 DD일') }</span>
        <span>1주당 배당금 : {sortData(apis)[sortData(apis).length - 1].stckGenrCashDvdnRt}원</span>
    </div>
  
        {/*예상 배당금 계산*/}
       <div className='cal'> 
        <InputSample api={sortData(apis)[sortData(apis).length - 1].stckGenrCashDvdnRt}/>
       </div>
  
  
   <div className='gr3'>
          <Bar options={options} data={{
            labels: sortData(apis).map(v => dayjs(v.cashDvdnPayDt).format('YYYY년 MM월 DD일')),
            datasets: [
              {
                label: '1주당 배당금',
                data: sortData(apis).map(v => v.stckGenrCashDvdnRt),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          }}/>
    </div>
  </div>
      </>
    );
}

export default Dividend;