import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <h2>Subtotal</h2>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
        
      </div>
  )
}

export default Subtotal