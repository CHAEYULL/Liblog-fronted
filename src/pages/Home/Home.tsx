import './Home.scss'
import Header from '../../component/Header/Header';
import { useState, useEffect } from 'react';
function Home(): JSX.Element {
    return (
        <div>
            <Header></Header>
            <div className="newBook">
                <div>{}</div>
                
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