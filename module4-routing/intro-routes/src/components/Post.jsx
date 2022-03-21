import { useParams } from "react-router-dom";
import { findPost } from "../data";

const Post = () => {
    let params = useParams();
    let post = findPost(params.slug);
    console.log(params);
    console.log(post);

    if (!post) {
        return (
            <article style={{ maxWidth: "70ch", margin: "0 auto" }}>
                <p>The post "{params.slug}" no longer exists</p>
            </article>
        )
    }

    return (
        <article style={{ maxWidth: "70ch", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5em", marginBottom: ".1em" }}>{post.title}</h2>
            <h3 style={{ fontSize: ".9em", marginTop: "0px" }}>
                <span>{post.author}</span>
                {' '}
                <span>{post.postedAt}</span>
            </h3>
            <p>{post.body}</p>
        </article>
    );
}

export default Post;