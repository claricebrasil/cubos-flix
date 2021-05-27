import { ReactComponent as CouponIcon } from "../images/coupon-circle-icon.svg";
import { ReactComponent as TimeIcon } from "../images/time-icon.svg";
import money from "../images/money.png";

function Cupom() {

    return (
        <div>
            <div className="banner-cupom">
                <div className="banner-info">
                    <h2>APROVEITE AGORA</h2>
                    <div className="coupon-info">
                        <CouponIcon className="coupon-icon" />
                        <p>CUPOM: HTMLNAOELINGUAGEM</p>
                    </div>
                </div>
                <div className="banner-time">
                    <h3>FINALIZA EM:</h3>
                    <div className="timer-info">
                        <TimeIcon className="time-icon" />
                        <p>00:04:52</p>
                    </div>
                </div>
                <img className="money-img" src={money} alt="imagem de dinheiro" />
            </div>
        </div>
    );
}

export default Cupom;