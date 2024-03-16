import { useEffect, useState } from "react";


const Blogs = () => {
    const [blog,setblog]=useState(0)
    useEffect(()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=>setblog(data))

    },[])
    return (
        <div className="md:w-2/3">
         <h1 className="text-4xl">Blog:{blog.length}</h1>   
        </div>
    );
};

export default Blogs;