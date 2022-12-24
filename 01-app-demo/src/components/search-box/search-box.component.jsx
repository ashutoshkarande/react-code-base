import './search-box.styles.css';

const SearchBox = (props) => {
    return (
        <input
            className='search-box monster-search-box'
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChangeHandler} />
    )

}

export default SearchBox