import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class HeaderContainer extends Component {
    render() {
        return (
            <div>
                 <NavLink to="/books">Shop</NavLink>    
                 <NavLink to="/cart">Cart</NavLink>
                 <div>
                 total = ({this.props.totalItems})
                 </div>

            </div>
        )
    }
}

const mapStateToProps = ({cartPage}) => {
    return {
      totalItems: new Set(cartPage.cart.map(item => JSON.stringify(item))).size
    };
  };
  
  export default connect(mapStateToProps, {})(HeaderContainer);
  
