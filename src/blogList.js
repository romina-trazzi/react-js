import Blogdetail from "./blogDetail";
import { randomUserId } from "./utils";

const BlogList = ({blogs, deleteBlog}) => {

    
    return (  

        <div className="blog_list">

            <h2> Cicling into the blogs </h2>

            {/* Creiamo il template ciclando nell'array dei blogs */}
            
            {blogs.map((elem) => (
                
                <Blogdetail blog= { elem } deleteBlog= { deleteBlog } key= {randomUserId()} />

            ))}

        </div>

    );
     
}
 
export default BlogList;


