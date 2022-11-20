import './Header.scss';
import Logo from './logo.png';
export const Header=()=>{
    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt=''/>
            </div>
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Курсы</li>
                    <li>Эксперты</li>
                    <li>Публикации</li>
                </ul>
            </nav>
            <button>Личный кабинет</button>
            <div className="burger-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}