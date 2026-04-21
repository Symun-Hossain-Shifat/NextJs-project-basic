import { FormPage } from "../Components/form";
import PostData from "../Components/PostData";


async  function PostPage  () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datas = await res.json();
    console.log(datas)
  return (
    <div className="w-10/12 mx-auto py-5"> 
        
        <FormPage></FormPage>
        
        <div className="grid grid-cols-3">
            { datas.map( Data => <PostData data = {Data} key={Data.id}></PostData>)}
        </div>
        
        </div>
  )
}

export default PostPage 