import img from './discount.png';
export const Discount=()=>{
    return(
        <div className="discount">
        <div className="container">
            <img src={img} alt=""/>
            <div className="text">
                -30% на все курсы
            </div>
            <div className="cross-button">
                X
            </div>
        </div>
    </div>
    )
}