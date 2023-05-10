import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json'
import Product from './components/Product';
function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  const [total, setTotal] = useState(0)



  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)
    )
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      {products?.map((product) => (
        <Product key={product.id}
          basket={basket}
          total={total} money={money}
          setBasket={setBasket}
          product={product}

        />
      ))}
    </>
  );




  // function App() {
  //   const[money ,setMoney]=useState(100)
  //     return (
  //       <>
  //        <Header money={money} />
  //        {products.map(product  product =>{
  //         <Product  product={product}/>
  //        })}

  //       </>
  //     );
}

export default App;
