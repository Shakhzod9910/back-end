import './App.css';

function App() {
  return (
      <div class="container">
        <span class="nav">MEDICAL HELP CENTERS</span>   
       <div class="wrapper">
        <div class="leftInputs">
            <form action="#">
                <span>Patient's information</span>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="e.x John Wick" required></input>
                <label for="adress">Adress</label>
                <input type="text" id="adress" placeholder="Location" required></input>
                <label for="age">Age</label>
                <input type="number" id="age" placeholder="Age" required min="0" max="120"></input>
                <label for="services">Services</label>
                <input type="text" id="services" placeholder=""></input>
                <button id="btnSubmit">Submit</button>
            </form>
            <div class="box"></div>
        </div>
        <div class="rightHeader">
            <span class="textHeader">Every</span>
            <span class="textHeader">Information</span>
            <span class="textHeader">Nurses</span>
            <span class="textHeader">Needs</span>
        </div>
       </div>
    </div>
  );
}

export default App;
