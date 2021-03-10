import React from 'react'
import {NavLink, Switch, HashRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AllProducts from './allProducts'
class Category1 extends React.Component{
      
    render(){
        return(
            <HashRouter>
                <ScrollToTop/>
            <div>
                 <div className='productsContainer'>
                     <div className='headings' id='#category2'>
                         <div>
                              <h2>Category 1</h2>
                         </div>
                         <div>
                         <NavLink to='/allProducts'>See All</NavLink>
                         </div>
                       </div>            
                     <section className='products'>
                     <div>
                         <img src='/images/product10.png'></img>
                         <section className= 'description'>
                            <p>adding description</p>
                            <p>$500</p>
                         </section>
                      </div>  
                    <div>
                         <img src='/images/product1.png'></img>
                         <section className= 'description'>
                             <p>adding description</p>
                             <p>$500</p>
                         </section>
                    </div>
               <div>
                    <img src='/images/product8.png'></img>
                   <section className= 'description'>
                       <p>adding description</p>
                       <p>$500</p>
                   </section>
               </div>
               <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                        <p>$500</p>
                    </section>
               </div>
               <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                        <p>$500</p>
                    </section>
                </div>   
                <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                        <p>$500</p>
                    </section>
                </div> 
                <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                        <p>$500</p>
                    </section>
                </div>
                <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                         <p>$500</p>
                    </section>
                </div> 
                <div>
                    <img src='/images/product3.png'></img>
                    <section className= 'description'>
                       <p>adding description</p>
                       <p>$500</p>
                    </section>
                </div>       
                <div>
                    <img src='/images/product8.png'></img>
                    <section className= 'description'>
                         <p>adding description</p>
                        <p>$500</p>
                   </section>
                </div>                  
               </section>
           </div>
           <div className='content'>
               <Route path='allProducts' Component={AllProducts}/>
           </div>
        </div>
        </HashRouter>
        )
    }
}
export default Category1;