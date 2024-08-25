import postsData from '../posts.json';
import Article from '../components/Article'
import Search from '../components/Search'
import { useState } from 'react';

function Home() {
    const [posts,setPosts] = useState(postsData);

    const onChangeSearch = (value) => {
        const filteredPosts = postsData.filter((item) => item.title.toLowerCase().includes(value));
        setPosts(filteredPosts);
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onChangeSearch={onChangeSearch}/>
            {posts.map((props, index) =>
                <Article {...props} key={index} />
            )}
        </>
    );
}

export default Home;