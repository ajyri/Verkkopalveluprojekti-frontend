
const Search = () =>  {
    return  (
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Etsi tuotteita"
            name="s" 
        />
        <button type="submit" className="ms-1">Etsi</button>
    </form>
    )
}

export default Search;