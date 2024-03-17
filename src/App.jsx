
import  { useState, useEffect } from 'react';
import IceShopList from './components/IceShopList.jsx';
import { getAllData } from './services/get';
import Counter from './components/Counter.jsx';
import Form from './components/Form.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      {!error && !isLoading && <IceShopList users={users} setUpdate={setUpdate}/>}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <Counter user={users} setUpdate={setUpdate}/>
      <Form setUpdate={setUpdate}/>
    </>
  );
}

export default App;
