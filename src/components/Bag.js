import { ReactComponent as BagIcon } from "../images/bag-icon.svg";
import { ReactComponent as CouponBag } from "../images/coupon-icon.svg"
import { ReactComponent as PersonIllustration } from "../images/person-illustration.svg";

function Bag () {

    return (
        <div>
            <div className="bag-empty">
                <div className="bag-top">
                    <BagIcon className="bag-icon" />
                    <h3>Sacola</h3>
                </div>
                <div className="bag-content">
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione filmes agora</p>
                    <PersonIllustration className="person-illustration" />
                </div>
                <div className="bag-bottom">
                    <p>Insira seu cupom</p>
                    <div className="bag-input">
                        <input type="text" placeholder="Cupom de desconto" />
                        <CouponBag className="coupon-bag" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bag;