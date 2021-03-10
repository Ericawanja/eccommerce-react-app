import React from 'react'
import '../index.css'
import {FaCartPlus} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import { HashRouter,Route,NavLink, Switch } from 'react-router-dom'
import AllNew from './AllNew'
import Category1 from './category1'
import Category2 from './categoty2'
import Category3 from './category3'
import AllProducts from './allProducts'
import Home from './Home'
class Header extends React.Component{
    render(){
            return (
                <HashRouter>
                <div className='headerContainer'> 
                 <div className='header'>
                     <div className='header1'>
                        <div >
                            <NavLink to='/home'><FaHome size='3rem' className='homeIcon'/></NavLink>
                        </div>
                         
                         <div className='title'>
                             <h1>Eleso</h1>
                         </div>
                             <nav>
                                  <FaCartPlus size='3rem'className='cartIcon'/>
                              </nav> 
                     </div>
                     <div className='header2'>
                             <span><NavLink to='/allNew'>New / </NavLink></span>
                             <span><NavLink to='/category1'>Category1 /</NavLink></span>
                             <span><NavLink to='/category2'>Category2 /</NavLink></span>
                             <span><NavLink to='/category3'>Category3 /</NavLink></span>
                             <span><NavLink to= '/allproducts'>Shop All</NavLink></span>
                      </div>
                 </div>
                 <div className='contents'>
                     <Switch>
                         <Route path='/home' component={Home}/>
                         <Route path='/allNew'component={AllNew}/>
                         <Route path='/category1' component={Category1}/>
                         <Route path='/category2' component={Category2}/>
                         <Route path='/category3' component={Category3}/>
                         <Route path='/allproducts' component={AllProducts}/>
                         <Route exact path='/' component={Home}/>
                     </Switch>
                 </div>
                 
            </div>
         </HashRouter>  
        )
    }
}
export default Header;