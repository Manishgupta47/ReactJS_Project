import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event)=>{
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let HandleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,

        });
    };
    return(
        <div>
            <h4>Give A Comment!</h4>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formData.username}  onChange={handleInputChange} id="username" name="username"/>
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea  cols="30" rows="10" placeholder="Add few marks" value={formData.remarks}  onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" id="rating" name="rating" value={formData.rating} min={1} max={5}  onChange={handleInputChange}/>
                <br /><br />
                <button>Add Comment</button>
            </form>

        </div>
    )
}