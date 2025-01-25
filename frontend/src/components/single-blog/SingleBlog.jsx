import "./single-blog.css";
const SingleBlog = () => {
  return (
    <div className="full-blog">
      <div className="full-blog-container">
        <div className="blog-image">
          <img
            src="https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.jpg?s=1024x1024&w=is&k=20&c=4dGL31lbpt61qk1sDXCpLm7PtZH7L6UI_2fekqS7GqQ="
            alt="ll"
          />
        </div>

        <div className="single-post-title">
          <h1>Post Title</h1>
        </div>

        <div className="single-post-user-info">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
          <div className="name-n-date">
            <p>Name</p>
            <p>date</p>
          </div>
        </div>

        <div className="blog-contents">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          blanditiis a dicta assumenda ipsum eius commodi eveniet sequi nemo,
          vel culpa esse tempore quae deserunt quod dolorem odit natus rerum
          impedit. Tenetur odio velit reiciendis explicabo magnam, corrupti,
          nam, aut voluptatem in aperiam rerum ipsa recusandae possimus quis
          fugit libero veritatis eum. Impedit soluta rem officia quam architecto
          recusandae nemo fuga, itaque, molestiae modi autem nesciunt vitae
          molestias est repellat iusto laboriosam dolores ducimus esse quasi
          nostrum accusamus. Aut, debitis ipsa? Modi itaque impedit rerum
          expedita asperiores corrupti, nostrum dolorem quo esse exercitationem
          alias omnis laudantium veniam, accusantium repudiandae eligendi!
        </div>

        <div className="comments">
          <h1>Comments (123)</h1>

          <div style={{ position: "relative" }}>
            <input type="text" placeholder="What are your thoughts" />
            <button>comment</button>
          </div>
            <hr />
          <div className="comment-box">
            <div className="user-comment">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
              <div className="user-det">
                <p>Name</p>
                <p>Date</p>
              </div>
            </div>
            <div className="comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quia enim aspernatur molestias ipsa facere
                 eos ipsum cumque? Laborum molestias amet quos enim quo culpa sed ex at ab iusto! 
                 Minima.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
