import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckPage = () => {
const [input, setInput] = useState('')
const navigate = useNavigate()
const password = '1234'


 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  };

  const handleSubmit = () => {
    console.log("Submit clicked!");
    // Add logic for form submission here
    if ( input === password) {
        navigate("/")
    } else {
        alert('Password is wrong')
    }

  };

  return (
    <div>
      <div className="flex flex-col w-1/3 justify-center m-auto">
      <h1 className="text-center text-3xl font-bold ">Hello Bosses</h1>

      <input
      className="p-2"
        type="number"
        placeholder="Your password"
        onChange={handleInputChange} // Properly pass the event handler
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>

      </div>
      
    </div>
  );
};

export default CheckPage;
