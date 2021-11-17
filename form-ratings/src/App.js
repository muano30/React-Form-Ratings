import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Form() {
  const [formRating, setFormRating] = useState("")

  const [ratingList, setRatingList] = useState([])

  const getRating = (ratingNumber) => {
    var ratings = []
    for (var i = 0; i < ratingNumber; i++) {
      console.log(i)
      ratings.push("*")
    }

    return ratings
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('something', formRating)
    if(formRating === ''){
      return
    }else{

    
    if (+formRating <= 10) {
      setRatingList([...ratingList, getRating(+formRating)])
    }
    setFormRating('')
    // console.log('rating',  formRating)
  }
  }

  return (
    <div className="form">
      <h1 className="h1">Form Ratings checker</h1>
      <form onSubmit={handleSubmit}>
        <div className="label">
          <label>Rating :</label>
        </div>

        <input placeholder="Rating"
          type="number"
          onChange={(e) => setFormRating(e.target.value)}
          name="formRating"
          value={formRating} />
        <button type="submit" >Submit</button>
      </form>

      <ol>
        {ratingList.map((item, index) => {
          return (
            <li key={index}>
              <h2>{item}</h2>
            </li>)
        })}
      </ol>

    </div>
  );
}

export default Form;
