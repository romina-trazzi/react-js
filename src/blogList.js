const BlogList = ({blogs, deleteBlog}) => {

    
    return (  

        <div className="blog_list">

            <h2> Cicling into the blogs </h2>

            {/* Creiamo il template ciclando nell'array dei blogs */}
            
            {blogs.map((blog) => (
                
                <div key={blog.id}> 
                    <h3> {blog.title} </h3>
                    <p> Written by {blog.author} </p>
                    <button onClick = { () => deleteBlog(blog.id) }> Delete Blog </button>
                </div>

            ))}

        </div>

    );
     
}
 
export default BlogList;


