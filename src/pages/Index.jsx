import posts from '../posts.json';
import Article from '../components/Article'

function Home() {
    return (
        <>
            <h1>Simple Blog</h1>
            {posts.map((post) => <Article title={post.title} tags={post.tags} date={post.date}/>)}
        </>
    );
}

export default Home;