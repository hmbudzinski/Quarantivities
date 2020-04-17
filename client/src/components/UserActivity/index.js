import React from "react";
import API from "../../utils/API";

export function UserActivity () {
    
    function handleFormSubmit(event) {
        event.preventDefault();

        let newActivity = {
            title: document.getElementById("titlesubmit").value,
            description: document.getElementById("dessubmit").value, 
            href: document.getElementById("urlsubmit").value,
            likes: 0,
            category: document.getElementById("categorysubmit").value
        }

            API.setActivity(newActivity)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => console.log(err))
    }

    return(
        <form>
           <input type="text" className="form-control" placeholder="Activity Title" id="titlesubmit" name="title" />
           <input type="text" className="form-control" placeholder="Description" name="title" id="dessubmit" />
           <input type="text" className="form-control" placeholder="URL" name="url" id="urlsubmit" />
           <p>Select a Category: </p>
            <div className="form-group">
            <select className="form-control" id="categorysubmit">
                <option>Cooking</option>
                <option>Crafts</option>
                <option>Random</option>
                <option>Fitness</option>
            </select>
            </div>
            <button type="submit" onClick={handleFormSubmit}>Add Activity</button>
        </form>
    )
}


export function UserTitle ({ title, href }) {
    return (
        <>
            {/* <p className="card-text" href={href}>{title}</p> */}
            <a href={href} target="blank">{title}</a>
        </>
        );
    }
    
// export default UserActivity;