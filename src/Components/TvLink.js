import React, { useState } from 'react';

const TvLink = ({t}) => {
  const [play,setPlay]=useState(false)  
  const {name,img,link} = t
  const [close,setClose]= useState(true)
  const handleClick = ()=>{
    
    setPlay(true)
    setClose(false)
  }
    return (
        <div>
            {play && <video src={link} controls></video> }
            
            
   <button>         <div onClick={()=>handleClick(play)} className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    

  </div>
</div></button>
        </div>
    );
};

export default TvLink;