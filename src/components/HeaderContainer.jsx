import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HeaderContainer extends Component {
    render() {
        return (
            <div>
                 <NavLink to="/books">Shop</NavLink>
                 <NavLink to="/cart">Cart</NavLink>
            </div>
        )
    }
}
