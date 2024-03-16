import { useEffect, useState } from "react";


const Blogs = () => {
    const [blog,setblog]=useState(0)
    useEffect(()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=>setblog(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;