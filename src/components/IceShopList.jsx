import IceShop from './IceShop.jsx';

function IceShopList({users, setUpdate}) {
  return (
    <>
      <div className='ice-grid'>
        {users.map((user) => (
          <div key={user.id}>
            <IceShop user={user} setUpdate={setUpdate}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default IceShopList;
