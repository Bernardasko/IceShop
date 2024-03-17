import { updateData } from '../services/update';

function IceShop({ user, setUpdate }) {
  const { flavor, id, color, count, fontColor } = user;

  const handleClick = async () => {
    await updateData(id, { count: count + 1 });
    setUpdate((update) => update + 1);
  };

  return (
    <>
      <button key={id} style={{ backgroundColor: color, color: fontColor }} className="ice-btn" onClick={handleClick}>
        <h1>{flavor}</h1>
      </button>
    </>
  );
}

export default IceShop;
