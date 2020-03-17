import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestBooks } from '../redux/bookShopReducer.js'

 class BooksContainer extends Component {
    componentDidMount(){
        this.props.requestBooks();
    }
    render() {
        return (
            <div>
                <h1>Books will be here</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        books: state.bookShopPage.books,
        isFetching: state.bookShopPage.isFetching,
    }
}

export default connect(mapStateToProps, {requestBooks})(BooksContainer)
