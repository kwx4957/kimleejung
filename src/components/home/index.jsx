import '../../App.css';
import JSONDATA from '../../assets/DATA.json'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isNav,setNav]=useState(false);
    const [loading, setLoading] = useState(false);
    const [firstRun, setFirstRun] = useState(false);
    const [itemList, setItemList] = useState([]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      //검색창에서 입력한 값을 DATA.json파일에서 찾음
      const data = JSONDATA.find( ({ company }) => company === searchTerm);
      if(!data) return alert('검색 결과가 없습니다.')
      navigate('/dividend', { state: data });
    }
  
    const onLogin = (e) => {
      e.preventDefault();
      navigate('/login');
    }
    
    const onSide = (e) => {
    e.preventDefault();
    setNav((prev) => !prev)
  }

  useEffect(() => {
    console.log("itemList", itemList);
  }, [itemList]);
  
  useEffect(() => {
    if (!firstRun) {
      setFirstRun(true);
      const fetchUsers = async () => {
        try {
          setLoading(true);
          const res = await axios.get('/GetDiscInfoService/getDiviDiscInfo?pageNo=1&numOfRows=20000&resultType=json&serviceKey=LxT%2B%2BKVSdbvMJ5%2FPf9MPc3poMWk5E62s7tCmFnGkbHUwPidtHpQvdcP3rt5ST4C9h01d4K5GJDmeQlKaSQhO3g%3D%3D');
          const data = res.data.response.body.items.item;
          const dataArr = data.filter((item) => item.pvtrOnskCashDvdnBnfRt !== "0" && item.basDt.includes("2021"))
          dataArr.sort((a, b) => {
            return parseFloat(b.pvtrOnskCashDvdnBnfRt) - parseFloat(a.pvtrOnskCashDvdnBnfRt)
          });
          console.log(dataArr);
          const cuttedData = dataArr.splice(0, 10)
          setItemList(cuttedData);
          setLoading(false);
        } catch (e) {
          console.error(e)
          setLoading(false);
        }
      };
      fetchUsers();
    }
  }, []);
  
    return (
      <>
      
      <form onSubmit={onLogin}>
        {/* 로그인 */}
        <button className="Login_Button">
          <img src="login.png" className='Login' alt="로그인"/><br/>
          <span className="Login_Text">Login</span>
        </button>
      </form>
  
        <div>
          {/* 로고이미지 */}
          <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'></img>
          {/*로고명*/}
          <img src="kimleejung_letterlogo.png" className="App-size" alt='logoName'></img>
        </div>
      
          {/*검색창*/}
          <form onSubmit={onSubmit}>
            <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
           
            {/*검색버튼*/}
            <button className="search_button">
              <img src="button.png" className="App-button" alt='버튼 이미지' />
            </button>
          </form>
          <div  className="search_list">
            {/*검색 기능*/}
            {JSONDATA.filter((val)=> {
              if (searchTerm === ""){
                return null
              } else if (val.company.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            }).map((val,key)=> {
              return (
              <div className="user" key={key} onClick={()=>{setSearchTerm(val.company)}}> 
                <p> {val.company} </p>
              </div>
              );
            })}
          </div>
  
          {/* 기업순위 */}
          <form onSubmit={onSide}>
            <button className="TOP_Button">
              <img src="arrow_push.png" className="TOP" alt="배당률 순위" />
            </button>
          </form>
  
          <div className='nav' style={isNav?{display:"block"}:{display:'none'}}>
            {/*sample data*/}
            <h1>배당률 TOP 10</h1>
            {loading ? <div className="Side_text">로딩중...</div> 
            : <ul>
              {itemList.map((item, index) => (
                <li key={item.crno}>{`${index + 1}순위, 배당률: ${item.pvtrOnskCashDvdnBnfRt}, 기업번호: ${item.crno}`}</li>
              ))}
            </ul>
            }
            
            <form onSubmit={onSide}>
              <button className="Side_Button">
                <img src="arrow_pull.png" className="TOP" alt="기업순위" />
              </button>
            </form> 
          </div>
      </>
    );
}

export default Home;