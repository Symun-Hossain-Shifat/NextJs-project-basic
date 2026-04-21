import PostData from "../Components/PostData";


async  function PostPage  () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datas = await res.json();
    console.log(datas)
  return (
    <div> 
        <p className="font-extrabold text-3xl">Post :  </p> 
        
        <div className="grid grid-cols-3">
            { datas.map( Data => <PostData data = {Data} key={Data.id}></PostData>)}
        </div>
        
        </div>
  )
}

export default PostPage 