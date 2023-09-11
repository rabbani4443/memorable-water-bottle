import './Bottle.css'

const Bottle = ({bottle, handelAddToCart}) => {
    const {name, price, stock, img } = bottle;
    return (
        <div className="bottle">
            <h3> {name} </h3>
            <img src={img} alt={name} />
            <h4> Stock : {stock} Pieces </h4>
            <h3> Price: {price}$ </h3>
            <button onClick={handelAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;