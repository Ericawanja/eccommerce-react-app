import React from 'react'
import { HashRouter, NavLink, Switch,Route } from 'react-router-dom';
import AllProducts from './allProducts';
import ScrollToTop from './ScrollToTop';
class AllNew extends React.Component{
    render(){
        return(
            <HashRouter>
                <ScrollToTop/>
            <div>
                 <div className='productsContainer'>
                     <div className='headings'>
                         <div>
                              <h2>New</h2>
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
export default AllNew;