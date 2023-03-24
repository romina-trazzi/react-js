const Blogdetail = ({blog, deleteBlog}) => {

    return (
    
    <div key={blog.id}> 
        <h3> {blog.title} </h3>
        <p> Written by {blog.author} </p>
        <button onClick = { () => deleteBlog(blog.id) }> Delete Blog </button>
    </div> 
    
    )
}

export default Blogdetail