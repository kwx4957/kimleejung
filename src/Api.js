import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputSample from './InputSample';

function Api({ name, crno }) {
  const [apis, setApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
            pageNo : 34,
            numOfRows: 1,
            resultType: 'json',
            basDt: null,
            fnccmpNm: name,
            crno: crno,
            serviceKey: 'H8M+zTGzEGjkWijFKjq4wni6P6SKhzbEalrHnkrdexbFlgkuWgDMviKNbCN9tqt2I8tTF5dEedbjV3QMHIkqxA=='
          },
        });
        const itemArr = res.data.response.body.items.item;
        setApi(itemArr)
        console.log(itemArr)
      } catch (e) {
        console.error(e)
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [name, crno]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!apis) return null;
  return  (
    <div>
      {/* <InputSample api={apis} /> */}
      {apis?.map(v => <div>
        <span>{v.basDt} {v.isinCdNm} </span><br/>
          <span>배당락 기준일 : {v.dvdnBasDt}</span><br/>
          <span>배당 지급일 : {v.cashDvdnPayDt}</span><br/>
          <span>1주당 배당금 : {v.stckGenrCashDvdnRt}원</span>
      </div>)}
    </div>);
}

export default Api;