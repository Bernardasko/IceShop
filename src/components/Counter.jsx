import { useState } from "react";

function Counter({ user }) {
    const [discount, setDiscount] = useState(0)
    const calculateSubTotal = () => {
      return user.reduce((total, { count, price }) => total + count * price, 0);
    };
  
    const calculateDiscountedTotal = () => {
      const total = calculateSubTotal();
      return total - total * (discount / 100);
    };
  
    return (
      <>
        <div className="counter">
          <div className="row">
            {user.map((users) => (
              <div
                className="words"
                key={users.id}
                style={{ color: users.color }}
              >
                <p className="wordss">{`${users.flavor} : ${users.count}`}</p>
              </div>
            ))}
          </div>
          <div className="total">
            <input type="number" className="procent" placeholder="0" min='0' max='100' value={discount} onChange={(e) => setDiscount(e.target.value)} />%
            <p>Subtotal: €{calculateSubTotal()}</p>
            <h4>Total: €{calculateDiscountedTotal().toFixed(2)}</h4>
          </div>
        </div>
      </>
    );
  }
  
  export default Counter;
  
