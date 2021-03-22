import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../Services/Actions/actions'

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;