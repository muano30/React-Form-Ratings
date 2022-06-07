import React, {Component} from 'react'


 class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     name: '',
     surname: '',
     age: '',
     gender: '',
     date: '',
     food: ''
      // {
      //  Dumpling: false,
      //  papAndrice: false
    //  }
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this); 
  //  this.handleCheckBox = this.handleCheckBox.bind(this)
  //  this.handleChangeSurname = this.handleChangeSurname.bind(this);
  //  this.handleChangeAge= this.handleChangeAge.bind(this);
  //  this.handleChangeGender= this.handleChangeGender.bind(this);
  //  this.handleChangeFood=this.handleChangeFood.bind(this);
  //  this.handleChangeDate =this.handleChangeDate.bind(this);

 }
// handleCheckBox(event){
  // console.log(event.target.value)
// }


 handleChange(event) {
   this.setState({
     [ event.target.name]: event.target.value,
   });
 }

//  handleChangeSurname(event) {
//    this.setState({
//      [ event.target.name]: event.target.value,
//    });
//  }

//  handleChangeGender(event) {
//   this.setState({
//     [ event.target.name]: event.target.value,
//   });
// }

//  handleChangeFood(event) {
//   this.setState({
//    [ event.target.name]: event.target.value,
//  });
// // let state = this.state;
// // state.food[event.target.value]=event.target.checked;

// }

//  handleChangeAge(event) {
//   this.setState({
//     [ event.target.name]: event.target.value,
//  });
// }


// handleChangeDate(event) {
//   this.setState({
//     [ event.target.name]: event.target.value,
//  });
// }


 handleSubmit(event) {
   event.preventDefault()
   this.setState({
     submitName: this.state.name,
     submitSurname: this.state.surname,
     submitAge: this.state.age,
     submitGender: this.state.gender,
     submitFood: this.state.food,
     submitDate: this.state.date,

  });
 }

 render() {
   return (
     <div>
       <form onSubmit={this.handleSubmit}>
         
        <input
           name="name"
           value={this.state.name}
           placeholder ="name"
           onChange={this.handleChange} />
        
        <input
          name="surname"
          placeholder="surname"
          value={this.state.surname}
          onChange={this.handleChange} />

        <input
           name="age"
           placeholder="age"
           value={this.state.age}
          onChange={this.handleChange} />

       <input
           name="gender"
           type="radio"
           // checked={this.state.gender == "male"}
           value="male"
           onChange={this.handleChange} />male

        <input
          name="gender"
          type="radio"
          // checked={this.state.gender=="female"}
          value="female"
          onChange={this.handleChange} />female

      <div>
       <input 
          name="food"
          value="Dumpling"
          type="checkBox"
          // checked={this.state.food.Dumpling}
          onChange={this.handleChange}
           /> Dumpling

       <input 
         name="food"
         type="checkBox"
        //  checked={this.state.food.papAndrice}
         value="papAndrice"
          onChange={this.handleChange}
           /> papAndrice
        </div> 

        <input 
        name="date"
        value={this.state.date}
        type="date"
        onChange={this.handleChange}/> 

         <button type='submit'>Submit!</button>

       </form>

       <h3>Name: {this.state.submitName}</h3> 
       <h3>Surname: {this.state.submitSurname}</h3>
       <h3>Age: {this.state.submitAge}</h3>
       <h3>Gender: {this.state.submitGender}</h3>
       <h3>Food: {this.state.submitFood}</h3>
       <h3>Date: {this.state.submitDate}</h3>
     </div>
   );
 };
}

export default App;