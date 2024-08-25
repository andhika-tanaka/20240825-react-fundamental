import { useState } from "react";

function Search(props) {
    const [keyword, setKeyword] = useState("");
    
    const onChangeSearch = (e) => {
        setKeyword(e.target.value);
        props.onChangeSearch(e.target.value);
    }

    return (
        <>
            <div>
                Cari artikel : <input onChange={onChangeSearch} ></input>
            </div>
            {props.totalPost ? <small>Found {props.totalPost} article with keyword {keyword}</small> : "No article found!"}
            
        </>
    );
}

export default Search;