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
            <small>Ditemukan 0 data dengan pencarian kata {keyword}</small>
        </>
    );
}

export default Search;