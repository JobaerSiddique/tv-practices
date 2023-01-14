import React, { useEffect, useState } from 'react';
import TvLink from './TvLink';

const Livetv = () => {
   const [tv,setTv]= useState([])

   useEffect(()=>{
     fetch("Tvapi.json")
     .then(res=> res.json())
     .then(data=>{
        setTv(data)
        console.log(data)
     })
   },[])
    return (
        <div>
            <div className='grid grid-cols-4 gap-8'>
            {
                tv.map(t=><TvLink
                key={t.id}
                t={t}
                ></TvLink>)
            }
            </div>
        </div>
    );
};

export default Livetv;