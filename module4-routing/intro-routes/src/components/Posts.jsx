import { Link } from "react-router-dom";
import { getPosts } from "../data";

const Posts = (props) => {
    let posts = getPosts();

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link to={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}            
            </ul>
        </div>
    );
}

export default Posts;