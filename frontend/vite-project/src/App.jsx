import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/submit")
      .then((response) => {
        console.log("Fetched data:", response.data); 
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:5000/submit", formData);
      console.log(response.data);
      
      axios.get("http://localhost:5000/submit")
        .then((response) => {
          setData(response.data);
        });

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h1>Form Submission</h1>
      <Form onSubmit={handleFormSubmit} />
      <h2>Submitted Items:</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name} - {item.prize}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
