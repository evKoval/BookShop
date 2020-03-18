import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestBooks } from '../redux/bookShopReducer.js'
import BookCard from './BookCard.jsx';

 class BooksContainer extends Component {
    componentDidMount(){
        this.props.requestBooks();
    }
    render() {
        return (
            <div>
               {this.props.books.map(book => (<BookCard book={book} key={book.isbn13}/>))}
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
