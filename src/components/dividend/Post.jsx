

const Post = () => {
    return(

        <div>
            <div className='title'>
                <p> </p>
            </div>

            <div className='title1'> 
                <img src="kimleejung_minilogo.png"  className="borad-logo" alt='borad'/>
                <p>글쓰기</p>
            </div>


            <div>
                {/* 제목 */}
                <input type='text' id='title_txt' placeholder='제목'/>
            </div>
                
            <div>
                {/* 내용 */}
                <textarea id='content_txt' placeholder='내용을 입력하세요.'></textarea>
            </div>

            {/* 등록버튼 */}
            <div className='button' >
                <button> 포스트 등록</button>
            </div>
        </div>
        
      );
}

export default Post;