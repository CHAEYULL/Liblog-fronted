import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ReactQuill from "react-quill";
import './PostWrite.scss'
import 'react-quill/dist/quill.snow.css'
import Modal from '../../component/Modal/Modal'

function PostWrite(): JSX.Element {

    let navigate = useNavigate()
    //제목
    const [bookTitle, setBookTitle] = useState('');
    //해쉬태그
    const [hastagValue, setHashtagValue] = useState('');
    //내용
    const [bookContent, setBookContent] = useState('');
    const PostDetail:Object = {
      bookTitle : bookTitle, 
      bookContent : bookContent,
      bookPostDate : new Date(),
    }
    //실시간 미리보기 도와주는 함수 
    function onChange(e:any){
      setBookTitle(e.target.value)
    //   console.log(e.target.value)
    }
    document.querySelector('.post-btn')?.addEventListener('click', function(e){
      console.log(bookContent);
      fetch('/users/posting', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(PostDetail) // postValue를 JSON 문자열로 변환
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Success:', data);
          // Optionally, you can navigate or perform other actions upon successful response
          navigate('/');
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });

  
    return (
        <>
          <div className="wrapper">
            {/* <form action="/users/posting" method="POST"> */}
                <div className="write">
                  <textarea name="bookTitle" id="title" onChange={onChange} placeholder="제목을 입력하세요"></textarea>
                  {/* <hr/> */}
                  <input type="text" name="hashtag" id="hashtag" onChange={onChange}  placeholder="태그를 입력하세요"/>
                  <br/>
                  <br/>
                <ReactQuill 
                  placeholder="당신의 지식을 공유해주세요..."
                  style={{ 
                           height:"100%",
                           border:"none",
                           outline:"none",
                           padding:"0px 30px"
                        }}
                  value={bookContent}
                  onChange={setBookContent}
                />
                <div className="footer">
                  <button onClick={()=>{navigate('/')}} className="cancel-btn btn">취소</button>
                  <button className="post-btn btn" onClick={()=>{navigate('/')}}>출판하기</button>
                  <button className="hold-btn btn">보류</button>
                </div>
                 </div>
                 <div className="preview">
                  {/*제목 미리보기 박스*/}
                   <div className="title-preview" dangerouslySetInnerHTML={{__html:bookTitle}}></div>
                   {/*내용 미리보기 박스*/}
                   <div className="quill-preview" dangerouslySetInnerHTML={{__html:bookContent}}>
                   </div>
                 </div>
        
            {/* </form> */}
          </div>
          <div className="modal">
            
          </div>
        </>
    )
}

export default PostWrite;
