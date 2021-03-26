import { useState } from 'react';
import marked from 'marked';


const initialText = "# Heading Level 1\n\n" +
                    "## Heading Level 2\n\n" +
                    "[link](www.google.com)\n\n" +
                    "`Inline code`\n\n" + 
                    "    Block Code\n\n" +
                    "- List Item\n- Second List Item\n\n" +
                    "> Blockquote\n\n" +
                    "![Image](image.png)\n\n" +
                    "**Bolded text**"

const Editor = () => {

    const [ userInput, setUserInput ] = useState(initialText);

    const handleChange = event => setUserInput(event.target.value);


    return ( 
        <>
            <div className="editor-pane">
                <textarea id="editor" onChange={ handleChange }>{ userInput }</textarea>
            </div>
            <div className="preview-pane">
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked( userInput, {gfm: true, breaks: true} ) }}></div>
            </div>
        </>
     );
}
 
export default Editor;