import { Form, redirect } from "react-router-dom";


export default function CreatePost() {
  
 

  

   const handleSubmit = (event)=> {
    
 }
    return(
        <div>
            <Form classNameName= "create-post">
              <div classNameName="mb-3">
    <label htmlFor="userId" classNameName="form-label">Enter Your user Id here</label>
    <input type="text" name="userId" classNameName="form-control" id="userId" placeholder="Your user Id"/>
    
  </div>
  <div classNameName="mb-3">
    <label htmlFor="title" classNameName="form-label">Post Title</label>
    <input type="text" name="title" classNameName="form-control" id="title" placeholder="How are feeling today..."/>
    
  </div>

   <div classNameName="mb-3">
    <label htmlFor="body" classNameName="form-label">Post Content</label>
    <textarea type="text" name="body" classNameName="form-control" id="body" placeholder="Tell us more.."/>
    
  </div>
   <div classNameName="mb-3">
    <label htmlFor="reactions" classNameName="form-label">Number of reactions</label>
    <input type="text" name="reactions" classNameName="form-control" id="reactions" placeholder="How many people reacted to this post"/>
    
  </div>
   <div classNameName="mb-3">
    <label htmlFor="tags" classNameName="form-label">Enter your hashtag here</label>
    <input type="text" name="tags" classNameName="form-control" id="tags" placeholder="Please Enter tags using space"/>
    
  </div> 
 
  <button type="submit" classNameName="btn btn-primary">Submit</button>
</Form>
        </div>
    )
};
 export async function createPostAction(data) {
 const formData = await data.request.formData();
 const postData =Object.fromEntries(formData);
 postData.tags = postData.tags.split(" ");
 console.log(postData);
  fetch("https://dummyjson.com/posts/add",{
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(postData),
  })
  .then((res)=> res.json())
  .then((post)=>{
    console.log(post)
    
    
  });
  return redirect("/");

 }