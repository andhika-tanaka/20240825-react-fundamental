import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = () => {
    return <span> - New -</span>
}

function Article (props) {
    const user = useContext(GlobalContext)
    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date : {props.date}, Tags : {props.tags.join(", ")} 
                {props.isNew && <ArticleStatus/>}
            </small>
            <div>
            <small>Ditulis oleh {user.username}</small>    
            </div>
        </>
    )
}

export default Article;