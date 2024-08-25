/* eslint-disable react/prop-types */

function Article (props) {
    
    return (
        <>
            <div>{props.name}</div>
            <div>{props.titles.map((title) => <div key= {title}>{title}</div>)}</div>
        </>
    )
}

export default Article;