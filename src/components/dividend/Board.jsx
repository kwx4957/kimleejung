import { useNavigate } from "react-router-dom";
import './Borad.css';

const Board = () => {
    const navigate = useNavigate();

    const onPost = (e) => {
        e.preventDefault();
        navigate('/post');
    }
    
    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div> 
                <img src="kimleejung_logo.png"  className="borad-logo" alt='borad'/>
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