import './Post.css';
import { useNavigate } from "react-router-dom";

const Post = () => {
    const navigate = useNavigate();

    const onBoard = (e) => {
        e.preventDefault();
        navigate('/board');
      }
    
    return(
        <>
            <div> 
                <button className="Home">
                    <a href='http://localhost:3000'>
                        <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'>
                            {/* <a href='http://localhost:3000'/> */}
                        </img>
                    </a>
                </button>
            </div>
            <div className='Write'>
                <div className='title'>
                    <p> </p>
                </div>

                <div className='title1'> 
                    <img src="kimleejung_minilogo.png"  className="borad-logo" alt='borad'/>
                    <p>글쓰기</p>
                </div>


                <div>
                    {/* 제목 */}
                    <input type='text' id='title_txt' placeholder='제목' className="txt"/>
                </div>
                    
                <div>
                    {/* 내용 */}
                    <textarea id='content_txt' placeholder='내용을 입력하세요.' className="txt"/>
                </div>

                {/* 등록버튼 */}
                <form onSubmit={onBoard}>
                    <div className='txt_button' >
                        <button>글쓰기 등록</button>
                    </div>
                </form>
            </div>
        </>
      );
}

export default Post;