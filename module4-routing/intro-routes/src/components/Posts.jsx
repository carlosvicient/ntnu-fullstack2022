import { Outlet } from "react-router-dom";
import { getPosts } from "../data";
import CustomLink from "./CustomLink";

const Posts = (props) => {
    let posts = getPosts();

    return (
        <div className="two-columns">
            <ul className="menu-column no-list">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <CustomLink to={`/posts/${post.slug}`}>
                            {post.title}
                        </CustomLink>
                    </li>
                ))}            
            </ul>
            <div className="content-column">
                <Outlet/>
            </div>
        </div>
    );
}

export default Posts;