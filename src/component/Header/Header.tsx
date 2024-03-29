import asideCloseActivate from '../../function/asideCloseActivate';
import asideOpenActivate from '../../function/asideOpenActiavte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import './Header.scss'

function Header():JSX.Element {

    return (
        <>
            <header >
                <nav>
                    <h1 id="logo">LiBlog</h1>
                    <button id="login-button"><FontAwesomeIcon icon={['fas', 'right-to-bracket']} size="xl" />&nbsp;&nbsp;&nbsp;로그인</button>
                    <button id="nav-open-button" onClick={asideOpenActivate}><FontAwesomeIcon icon={['fas','bars']} size="2xl" /></button>
                </nav>
                <div id="background">
                    <aside>
                        <button onClick={asideCloseActivate} id="nav-close-button"><FontAwesomeIcon icon={['fas', 'xmark']} size="2xl" /></button>
                        <br></br>
                        <br></br>
                        <Link className="nav-link" to="/">Liblog 소개</Link>
                        <Link className="nav-link" to="">Liblog 사용법</Link>
                        <Link className="nav-link" to="">도서 검색</Link>
                        <Link className="nav-link" to="/post-list">책 목록</Link>
                        <Link className="nav-link" to="/post-write">책 지필하기</Link>
                        {/* <h3 onClick={()=>{ navigate('/post-write') }}>책 지필하기</h3> */}
                        <Link className="nav-link login-link" to="/login"><FontAwesomeIcon icon={['fas', 'right-to-bracket']} size="xl" />&nbsp;&nbsp;&nbsp;로그인</Link>
                    </aside>
                 </div>
            </header>
        </>
    )
}
export default Header