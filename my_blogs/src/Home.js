import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs')

    return (
        <div className='home'>
            <h2> My Blogs </h2>
            { error && <div> { error } </div> }
            { isPending && <div> Loading... </div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}
 
export default Home;