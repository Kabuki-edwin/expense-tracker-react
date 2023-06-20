import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
const { transactions } = useContext(GlobalContext);

  return (
    <div>
       <h3>History</h3>
      <ul className="list">
        { transactions.map(transaction =>(<li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> ))}
        <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> 
      </ul>
    </div>
  )
}

export default TransactionList
