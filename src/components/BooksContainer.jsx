import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../redux/bookShopReducer.js'
import BookCard from './BookCard.jsx';

 class BooksContainer extends Component {
    componentDidMount(){
        this.props.getBooks();
        console.log(this.props.books);
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

export default connect(mapStateToProps, {getBooks})(BooksContainer)
