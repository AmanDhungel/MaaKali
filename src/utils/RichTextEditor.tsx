import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditor from "react-froala-wysiwyg";
import { useState } from "react";

const RichTextEditor = () => {
  const [model, setModel] = useState("Example Set");

  const handleModelChange = (event) => {
    setModel(event);
  };

  return (
    <>
      <FroalaEditor
        tag="textarea"
        model={model}
        onModelChange={handleModelChange}
      />
    </>
  );
};

export default RichTextEditor;
