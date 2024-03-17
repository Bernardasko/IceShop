import { useState } from 'react';
import { postData } from '../services/post';

function Form({ setUpdate }) {
  const [flavor, setFlavor] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState("");
  const [price, setPrice] = useState('');

  const colors = ["#ed7496", "#9e6f68", "#f0f0f0", "#68cc9d", "#ce33cb", "#b1160a"];

  const handleSubmit = async () => {
    try {
      postData({ flavor, color, count: 0, price });
      setUpdate((update) => update + 1);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" placeholder="Flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {colors.map((colorOption, index) => (
          <option key={index} style={{ backgroundColor: colorOption }} value={colorOption}>{colorOption}</option>
        ))}
      </select>
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button className='form-btn' type="submit">Add Ice Cream</button>
    </form>
  );
}

export default Form;