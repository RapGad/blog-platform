import React, { useState, useRef } from "react";
import "./create-post.css";
import JoditEditor from "jodit-react";

const CreatePost = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editor = useRef(null);

  const handlePost = () => {
    if (title && content) {
      setArticles([...articles, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="app">
      <header className="blogheader">
        <h1>Blog Platform</h1>
      </header>
      <main className="main-content">
        <section className="post-form">
          <h2>Create a Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-title"
          />

          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          <button onClick={handlePost} className="post-button">
            Post
          </button>
        </section>
      </main>
    </div>
  );
};

export default CreatePost;
