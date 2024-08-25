const NewArticle = () => {
    return <span> - New -</span>
}

function Article (props) {
    
    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date : {props.date}, Tags : {props.tags.join(", ")} 
                {props.isNew && <NewArticle/>}
            </small>
        </>
    )
}

export default Article;