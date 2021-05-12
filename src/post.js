
import React from 'react';
import './index.css';



const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";


const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

// const arrow = 'https://dw-iconusers.flaticon.com/40629/40629600/1618390910363.svg?token=exp=1618391829~hmac=f9a6f6b7b7d9f174e3ccf9d540eda446'

// const official ='img/official.png'
// const downloading = 'https://dw-iconusers.flaticon.com/40629/40629600/1618388303381.svg?token=exp=1618391027~hmac=a315e5f48c5e96ec04f2e21e9ef13979'
/* <Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 февр."}
/> */
const author={
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "29 Лют."
}


function Post(){
    return(
        <div className='to_post'>

        <div className='post'>
            <div className='left'>
                <img className='anakin_img' src={author.photo}></img>
                </div>
            <div className='right'>
                <div className='author_info'>
                    <name className='name'>{author.name}</name>
                    <official>
                        <img className='official' src='official.png'></img>
                    </official>
                    <nickname className='nickname'>{author.nickname}</nickname>
                    <date className='date'>{author.date}</date>
                    <arrow >
                        <img className='arrow' src='arrow.png'></img>
                    </arrow>
                </div>
                <div className='author_post'>
                    <content className='content'>{author.content}</content>
                    <img className='ray_img' src={author.image}></img>
                </div>
                <div className='footer'>
                    <div className='comment' className='footer_icon'>
                        <img className='footer_element' src='comment.png'></img>
                        <div className='number'>482</div>
                    </div>
                    <div className='reload' className='footer_icon'>
                        <img className='footer_element' src='reload.png'></img>
                        <div className='number'>146</div>
                    </div>
                    <div className='like' className='footer_icon'>
                        <img className='footer_element' src='like.png'></img>
                        <div className='number'>887</div>
                    </div>
                    <div className='download' className='footer_icon'>
                        <img className='footer_element' src='download.png' ></img>
                        
                        
                    </div>
                </div>

            </div>

            

        </div>
        </div>
    )
}

export default Post;