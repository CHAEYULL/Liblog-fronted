import asideCloseActivate from '../function/asideCloseActivate';
import asideOpenActivate from '../function/asideOpenActiavte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header():JSX.Element {
    
    return (
        <body >
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
                        <h3>Liblog 소개</h3>
                        <h3>Liblog 사용법</h3>
                        <h3>도서 검색</h3>
                        <h3>책 지필하기</h3>
                        <h3 className="login-link"><FontAwesomeIcon icon={['fas', 'right-to-bracket']} size="xl" />&nbsp;&nbsp;&nbsp;로그인</h3>
                    </aside>
                 </div>
            </header>
        </body>
    )
}
export default Header