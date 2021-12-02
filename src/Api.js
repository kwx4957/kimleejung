import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputSample from './InputSample';

function Api({name,crno}) {
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
        const response = await axios.get('http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo',{
          params: {
            serviceKey: 'H8M+zTGzEGjkWijFKjq4wni6P6SKhzbEalrHnkrdexbFlgkuWgDMviKNbCN9tqt2I8tTF5dEedbjV3QMHIkqxA==',
            pageNo : 1,
            numOfRows: 10,
            resultType: 'json',
            basDt: null,
            crno: {crno}.crno ,
            stckIssuCmpyNm: {name}.name
          },
        });        
        setApi(response);
        console.log(response)
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!apis) return null;
  return  (
    <div>
      <InputSample api={apis} />
    </div>);

}

export default Api;