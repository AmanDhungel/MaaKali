"use client";

import { useEffect, useState } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  return (
    <FroalaEditorComponent
      tag="textarea"
      //   model={value}
      //   onModelChange={onChange}
    />
  );
};

export default RichTextEditor;
