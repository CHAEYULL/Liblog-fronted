import './Home.scss'
import Header from '../../component/Header/Header';
import { useState } from 'react';
function Home(): JSX.Element {
    let [입력값, 입력값변경] = useState('');
    return (
        <div>
            <Header></Header>
            <div className="newBook">
                <input onChange={(e)=>{입력값변경(e.target.value)}} />
                <button onClick={()=>{console.log(입력값)}}>클릭</button>
                <ul>
                    <li><a href=""><img src={"https://placehold.co/400X500"} width={"80%"}/><br/><br/><br/><h3>책 이름</h3></a></li>
                    <li><a href=""><img src={"https://placehold.co/400X500"} width={"80%"}/><br/><br/><br/><h3>책 이름</h3></a></li>
                    <li><a href=""><img src={"https://placehold.co/400X500"} width={"80%"}/><br/><br/><br/><h3>책 이름</h3></a></li>
                    <li><a href=""><img src={"https://placehold.co/400X500"} width={"80%"}/><br/><br/><br/><h3>책 이름</h3></a></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Home