import { useNavigate } from "react-router-dom";
import './Borad.css';


const Board = () => {
    const navigate = useNavigate();

    const onPost = (e) => {
        e.preventDefault();
        navigate('/Post');
    }
    
    return (
        <>
            
            {/* 로고 위치 및 크기 지정 */}
            <div> 
                <button className="Home">
                <a href='http://localhost:3000'>
                    <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'>
                        {/* <a href='http://localhost:3000'/> */}
                    </img>
                </a>
                </button>
            </div>
            <div style={{  padding: "50px 12px" }}>
               <table className="board_list">
                  <colgroup>
                     <col width="5%" />

                     <col width="50%" />
                     <col width="*" />
                     <col width="*" />
                     <col width="*" />
                  </colgroup>
                  <thead className="list">
                     <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th>조회수</th>
                     </tr>
                  </thead>
                  <tbody>
           
          
             
                  </tbody>

               </table>
            </div>


            {/* 글쓰기 버튼 */}
            <form onSubmit={onPost}>
                <button className="Post_Botton">
                    글쓰기
                </button>
            </form>
        </>
    )
}

export default Board;