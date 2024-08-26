import postsData from '../posts.json';
import Article from '../components/Article'
import Search from '../components/Search'
import { useEffect, useState } from 'react';

function Home() {
    const [posts, setPosts] = useState(postsData);
    const [totalPost, setTotalPost] = useState(0);
    const [extPosts, setExtPosts] = useState([]);

    const onChangeSearch = (value) => {
        const filteredPosts = postsData.filter((item) =>
            item.title.toLowerCase().includes(value)
        );
        setPosts(filteredPosts);
        setTotalPost(filteredPosts.length);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setExtPosts(json));
    }, []);


    return (
        <>
            <h1>Simple Blog</h1>
            <Search onChangeSearch={onChangeSearch} totalPost={totalPost} />
            {posts.map((props, index) =>
                <Article {...props} key={index} />
            )}
            <hr />
            <h2>External Post</h2>
            {extPosts.map((item, index) => (
                <div key={index}> - {item.title}</div>
            ))}
        </>
    );
}

export default Home;