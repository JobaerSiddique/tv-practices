import React from 'react';

const TvLink = ({t}) => {
    const {name,img,link} = t
    return (
        <div>
            <video src={link}></video>
            <div onClick={link} className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    

  </div>
</div>
        </div>
    );
};

export default TvLink;