import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({bottle, handelAddToCart}) => {
    const {name, img, price} = bottle;
    // console.log(bottle)
    return (
        <div className="bottle">
            <h3> {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handelAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handelAddToCart: PropTypes.func.isRequired
}

export default Bottle;