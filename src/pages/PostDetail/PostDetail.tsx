import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import Header from '../../component/Header/Header';
function PostDetail():JSX.Element{
    let {id} = useParams();
    let [bookDetailData, setBookDetailData]:any = useState("")
    let navigate = useNavigate();
    useEffect(()=>{
        fetch(`/post-detail/${id}`,{
            method:'GET'
        })
        .then((r)=>{return r.json()})
        .then((r)=>{
            // console.log(r)
            r = JSON.stringify(r)
            r = JSON.parse(r)
            console.log(id)
            setBookDetailData(r)
        })
    },[])
    function deleting(){
        fetch(`/post-delete?docid=${id}`,{
            method:'DELETE'
        })
        .then((r)=>{return r.text()})
        .then(()=>{
            navigate("/post-list")
        })
        .catch((e)=>{
            console.log(`삭제 실패 에러남 ${e}`)
        })
    }
    return(
        <div>
            <Header></Header>
            <h1>{bookDetailData.bookTitle}</h1>
            <p dangerouslySetInnerHTML={{__html:bookDetailData.bookContent}}></p>
            <button onClick={()=>{navigate(`/post-edit/${bookDetailData.bookId}`)}}>수정</button>
            <button onClick={deleting}>삭제</button>
        </div>
    )
}
export default PostDetail