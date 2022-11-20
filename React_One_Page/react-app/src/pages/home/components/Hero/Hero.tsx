import Hero_Img from './hero.png'
export const Hero =() => {
    return (
    <div className="container hero">
        <div className="content">
            <div className="title">
                Учим зарабатывать на криптовалюте <br/>c нуля
            </div>
            <div className="text">
                Онлайн-школа <br/> и профессиональное сообщество
            </div>
            <button>
                Выбрать курс
            </button>
        </div>
        <img src={Hero_Img} className="hero-image" alt=''/>
    </div>
    )
}
