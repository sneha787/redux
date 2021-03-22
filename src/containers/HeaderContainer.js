import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
