import React, {useState} from 'react';
import cl from "./SignForm.module.css";

const SignUpForm = () => {
    const [value,setValue] = useState('');
    const [posts,setPosts] = useState([
        {id:1, caption: "e-mail" , text: ""},
        {id:2, caption: "Login", text:""},
        {id:3, caption: "Password",text:""},
        {id:4, caption: "Confirm Password",text:""}
        ]);

    const TypeText = (post,e) =>{
        post.text = setValue(e.target.text)
    };

    return (
        <div className={cl.SignForm}>
            {posts.map(post =>
                <input key = {post.id} className = {cl.Input} value={value} onChange = {(e) => TypeText(post,e)} placeholder={post.caption}/>
            )}
        </div>
    );
};

export default SignUpForm;