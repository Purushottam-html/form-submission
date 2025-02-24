import { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    prize: "",
    description: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", prize: "", description: "", quantity: "" }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="prize" value={formData.prize} onChange={handleChange} placeholder="Prize" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
