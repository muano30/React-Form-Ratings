import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Form(){
const [formRating, setFormRating] = useState({
  rating:""
})

  const [ratingList, setRatingList] = useState([])
 
const handleChange = (e) => {
  // const getRating = (ratingNumber) => {
  //    var starRatings = ["*" , "*" , "*" , "*" , "*" , "*" , "*" , "*" , "*" , "*" , "*"]
  //   return starRatings.slice(0 , ratingNumber).join("")
  setFormRating({
    ...formRating, [e.target.rating]: e.target.value})
}
const handleSubmit = (e) => {
  e.preventDefault();
  setRatingList([...ratingList, formRating])

}

  return (
    <div>
      <form onClick={handleSubmit}>
        {/* <label>Rating:</label> */}
        <input placeholder="Rating"
         type="number"
         onChange={handleChange}
         rating = "rating" 
         value={formRating.rating}/>
        <button type="submit">Submit</button>
      </form>

      <ul> 
        {ratingList.map((item) => {
                    return(
                    <li>
                        <h2>{item.rating}</h2>
                    </li>)
                })}     
            </ul>

    </div>
  );
}

export default Form;
