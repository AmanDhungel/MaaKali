import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={handleContentChange} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default RichTextEditor;
