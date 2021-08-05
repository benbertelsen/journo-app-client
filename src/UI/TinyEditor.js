import React, { useState } from 'react';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';
import { Editor } from '@tinymce/tinymce-react';

export const TinyEditor = ({ writtenText, setEnteredContent }) => {
  const [contentEditor, setContentEditor] = useState();
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    setContentEditor(content);
    setEnteredContent(content);

    // const writtenText = tinymce.activeEditor.getContent();
  }

  return (
    <>
    <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          skin: false,
          content_css: false,
          height: 500,
          width: 900,
          menubar: false,
          plugins: [
            'link image',
            'table paste',
            'wordcount', 
            'paste',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        value={contentEditor}
        onEditorChange={handleEditorChange}
      />
    <button type="submit" onChange={handleEditorChange}>Edit post</button>
    </>
    );
  }

export default TinyEditor;