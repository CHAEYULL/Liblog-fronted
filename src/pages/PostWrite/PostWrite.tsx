import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ReactQuill from "react-quill";
import './PostWrite.scss'
import 'react-quill/dist/quill.snow.css'

function PostWrite(): JSX.Element {

    let navigate = useNavigate()
    //제목
    const [bookTitle, setBookTitle] = useState('');
    //해쉬태그
    
    //내용
    const [bookContent, setBookContent] = useState('');

    //지금 스테이트가 변경되는대로 그냥 막 저장이 되잖아? 
    function appending():void{ 
      fetch('/users/posting', {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({bookTitle, bookContent}) 
      })
      .then((r)=>{
        if (!r.ok){
          throw new Error("에러남");
        } else {
          return r.text()
        }
      })
      .then((r)=>{
        navigate('/post-list');
      })
      .catch((e)=>{
        console.log(`에러남 : ${e}`);
      })
    }

    return (
        <>
          <div className="wrapper">
            {/* <form action="/users/posting" method="POST"> */}
                <div className="write">
                  <textarea id="title" onChange={(e:any)=>{setBookTitle(e.target.value)}} placeholder="제목을 입력하세요"></textarea>
                  {/* <hr/> */}
                  <input name="hashtag" id="intro" placeholder="책을 한 줄로 소개해주세요"/>
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
                  onChange={setBookContent}
                />
                <div className="footer">
                  <button onClick={()=>{navigate('/')}} className="cancel-btn btn">취소</button>
                  <button className="post-btn btn" onClick={appending}>출판하기</button>
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
