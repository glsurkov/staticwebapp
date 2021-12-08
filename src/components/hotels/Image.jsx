import React,{useEffect,useContext,useState} from 'react';
import cl from './Image.module.css'
import axios from "axios";
import {AuthContext} from "../../context";

const Image = (props) => {


    const {token,admin} = useContext(AuthContext);
    const [image,setImage] = useState(null);


    async function deleteImage(e){
        try{
            e.preventDefault();
            const response = await axios.delete('/hotels/image',{
                params:{
                    image:props.path
                },
                headers:{
                    'Authorization':`Bearer ${token}`,
                }
            });
            console.log(response);
        }catch(e)
        {
            console.log(e);
        }
    }


    async function fetchImage(){
        try{
            const response = await axios.get('/hotels/image',{
                params:{
                    image:props.path
                },
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
                responseType:'blob'
            })
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(response.data)
            console.log(imageUrl);
            setImage(imageUrl);
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchImage();
    },[props.images])

    return (
        <div className = {cl.container}>
            <img className = {cl.image_box} src = {image} />
            <p onClick = {e => {deleteImage(e);props.fetchImages()}} className = {cl.delete}/>
        </div>
    );
};

export default Image;