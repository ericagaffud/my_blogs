import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:5000/blogs' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            <div className="center">
                { isPending && <div> Loading... </div> }
                { error && <div> { error }</div> }
            </div>
            
            { blog && (
                <article className="nav">
                    <div className="center">
                        <h2>{ blog.title }</h2>
                        <p className="bold"> { blog.category }</p> <br></br>
                    </div>
                    
                    <div className="body">{ blog.body }</div>
                    <div className="links">
                        <Link to="/"> Back </Link>
                        <button onClick={handleClick}> Delete </button>
                    </div>
                    
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;