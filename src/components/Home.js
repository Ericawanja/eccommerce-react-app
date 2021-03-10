import React from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import AllProducts from './allProducts';
import Products from './New'
function Home(){
    return(
        <HashRouter>
        <div>
         <div className='hero'>
             <div className='innerHero'>
                 <div className='content1'>
                     <h1>Loreum</h1>
                      <p>New Arrivals loreum IpsumLorem ipsum dolor sit amet.
                       Praesentium magnam consectetur vel in deserunt 
                      aspernatur est reprehenderit sunt hic.
                      Nulla tempora soluta ea et odio, 
                      unde doloremque repellendus iure, iste.</p>
                 </div>
                <div className='imageBox'>
                      <img src='/images/product5.png' alt='apple'></img>
                     
                  </div>
             </div>
            <span className='shopBtn'>
                <NavLink to='allproducts'>Shop Now</NavLink>
             </span>
         </div>  
         <Products/>
         <div className='contents'>
             <Switch>
                 <Route path='allproducts' component={AllProducts}/>
             </Switch>
         </div>
        </div>
        </HashRouter>
    )
}
export default Home;