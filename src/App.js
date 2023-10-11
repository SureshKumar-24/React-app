import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className='App'>
      <h1>Props in React </h1>
      <Student name={"Sam"} email={"sam123@gmail.com"} other={{ address: "delhi", pincode: 15215 }} />
      <Student name={"Peter"} email={"peterkim123@gmail.com"} other={{ address: "Mohali", pincode: 152145 }} />
      <Student name={"John"} email={"john123@gmail.com"} other={{ address: "Chandigarh", pincode: 154788 }} />
    </div>
  )
}

export default App;
