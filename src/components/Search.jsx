import { useState } from "react";

function Search(props) {
    const [keyword, setKeyword] = useState("");
    
    const onChangeSearch = () => {
        props.onChangeSearch(keyword);
    }

    const searchKeydown = (e) => {
        e.key==="Enter" && onChangeSearch(); 
    }

    return (
        <>
            <div>
                Cari artikel : <input onChange={(e) => setKeyword(e.target.value)} onKeyDown={searchKeydown} ></input>
                <button onClick={onChangeSearch}> Search</button>
            </div>
            {props.totalPost ? <small>Found {props.totalPost} article with keyword {keyword}</small> : "No article found!"}
            
        </>
    );
}

export default Search;