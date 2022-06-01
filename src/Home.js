import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // fetch funtion for url
const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');
  
// const handleDelete = (id) => {
//  const newBlogs = blogs.filter(blog => blog.id !== id);
//  setBlogs(newBlogs);
// }

    return (
        <div className="home">
            {/* error handling */}
            { error && <div>{ error }</div> }
            {/* loader  */}
            { isPending && <div>Loading...</div> }
            {/* all blogs */}
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div> 
     );
}
 
export default Home;