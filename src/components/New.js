import React from 'react'
import AllNew from './AllNew';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';

class Products extends React.Component{
    render(){
        return(
            <HashRouter>
            <div className='productsContainer'>
                <div className='headings'>
                <div>
                   <h2>Trending</h2>
                </div>
                <div>
                   <NavLink to ='AllNew'>See All</NavLink>
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
                    <img src='/images/product1.png'></img>
                    <section className= 'description'>
                        <p>adding description</p>
                        <p>$500</p>
                    </section>

                </div>
                <div>
                     <img src='/images/product4.png'></img>
                     <section className= 'description'>
                         <p>adding description</p>
                         <p>$500</p>
                     </section>
                </div>
                </section>
                <div className='contents'>
                    <Switch>
                        <Route path='/AllNew' Component={AllNew}/>
                    </Switch>
                </div>
            </div>
            </HashRouter>
        )
    }
}
export default Products;