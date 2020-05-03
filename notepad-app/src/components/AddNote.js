import React, { useState } from 'react';
import { getSessionItem, setSessionItem } from '../services/Storage';

function AddNote (){
    const [title, seTitle] = useState('');
    const [content, setContent] = useState('');

    function onTitleChange(event){
        seTitle(event.target.value);
    }

    function onContentChange(event){
        setContent(event.target.value);
    }

    function onAdd(){
        
    }


    return(
        <div className="page">
            <form>
                <fieldset>
                    <legend>New Note:</legend>
                    <p>
                        <input
                            type="text"
                            className="input"
                            placeholder="Title..."
                            value={title}
                            onChange={onTitleChange}
                        />
                    </p>
                    <p>
                        <textarea
                            type="text"
                            className="textArea"
                            placeholder="Note..."
                            value={content}
                            onChange={onContentChange}
                        >
                        </textarea>
                    </p>
                    <button
                        type="submit"
                        onClick={onAdd}
                    >
                        Add Note
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default AddNote;