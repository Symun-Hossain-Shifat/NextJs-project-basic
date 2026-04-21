

function PostData ({data}) {
  
  console.log(data)
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <p>{data.email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default PostData 