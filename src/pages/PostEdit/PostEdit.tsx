import React, { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill from "react-quill";
import './PostEdit.scss'
import 'react-quill/dist/quill.snow.css'

function PostEdit():JSX.Element{
    let navigate = useNavigate()
    let {id} = useParams();
    let [bookEditData, setBookEditData]:any = useState(""); 
    //제목
    const [bookTitle, setBookTitle] = useState('');
    //해쉬태그
    const [hastagValue, setHashtagValue] = useState('');
    //내용
    const [bookContent, setBookContent] = useState('');
    useEffect(()=>{
      fetch(`/post-edit/${id}`,{
        method: 'GET'
      })
      .then((r)=>{return r.json()})
      .then((r)=>{
        r = JSON.stringify(r)
        r = JSON.parse(r)
        // console.log(r.bookTitle)
        console.log(id)
        setBookTitle(r.bookTitle)
        setBookContent(r.bookContent)
      })
      .catch((e)=>{
        console.log(`에러남 ${e}`)
      })
    },[])

    //지금 스테이트가 변경되는대로 그냥 막 저장이 되잖아? 
    function editing():void{
      fetch('/users/editing', {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id ,bookTitle, bookContent}) 
      })
      .then((r)=>{
        if (!r.ok){
          throw new Error("에러남");
        } else {
          return r.text()
        }
      })
      .then((r)=>{
        navigate(`/post-detail/${id}`);
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
                  <textarea value={bookTitle} id="title" onChange={(e:any)=>{setBookTitle(e.target.value)}} placeholder="제목을 입력하세요"></textarea>
                  {/* <hr/> */}
                  <input name="hashtag" id="hashtag" placeholder="태그를 입력하세요"/>
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
                  value={bookContent}
                />
                <div className="footer">
                  <button onClick={()=>{navigate('/')}} className="cancel-btn btn">취소</button>
                  <button className="post-btn btn" onClick={editing}>수정하기</button>
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
export default PostEdit