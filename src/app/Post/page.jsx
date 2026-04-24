import { FormDataPage }from "@/Action";
import { FormPage } from "../Components/form";
import PostData from "../Components/PostData";


async  function PostPage  () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datas = await res.json();
    
    const Posts  = datas ;
    // console.log(typeof Posts)
  return (
    <div className="w-10/12 mx-auto py-5"> 
        
        <FormPage FormDataPage = { FormDataPage }></FormPage>
        
        <div className="grid grid-cols-3">
            { Posts.map( Data => <PostData data = {Data} key={Data.id}></PostData>)}
        </div>
        
        </div>
  )
}

export default PostPage 