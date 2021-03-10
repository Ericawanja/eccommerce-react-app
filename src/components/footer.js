import React from 'react'
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import AllNew from './AllNew'
import Category1 from './category1'
import Category2 from './categoty2'
import Category3 from './category3'
import AllProducts from './allProducts'
import ScrollToTop from './ScrollToTop';
class Footer extends React.Component{
    render(){
        return(
            <HashRouter>
             <ScrollToTop/>   
            <footer>
                <div className='footerContainer'>
                    <div className='footerSection-a'>
                        <div className='aboutUs'>
                            <h2>About us</h2>
                            <p>
                                 We are a  loreum IpsumLorem ipsum dolor sit amet
                                 aesentium magnam consectetur vel in deserunt 
                                 ernatur est reprehenderit sunt hic.
                                 la tempora soluta ea et odio, 
                                 e doloremque repellendus iure, iste.
                            </p>
                          </div>  
                            <div className='contacts'>
                                <div className='contactUs'>
                                    <h3>Contact us</h3>
                                    <p>
                                        @info.gmail.com
                                    </p>
                                </div>
                                <div className='ourLocation'>
                                    <h3>Our Location</h3>
                                    <p>
                                        P.O BOX 13, THIKA, KENYA
                                    </p>
                                    <p>
                                        <b>WORK DAYS:</b> MONDAY-FRIDAY
                                    </p>
                                </div>
                            </div>                                
            
                      <div className='getShopping'>
                            <h3>Get Shopping</h3>
                            <NavLink to='allNew'>New Arrivals</NavLink><br></br>
                            <NavLink to='category1'>Category 1</NavLink><br></br>  
                            <NavLink to='Category2'>Category 2</NavLink> <br></br>
                            <NavLink to='Category3'>Category 3</NavLink> <br></br>
                            <NavLink to='allproducts'>Shop ALL</NavLink> <br></br>                          
                        </div>
                    </div>
                    <hr></hr>
                    <div className='footerSection-b'> 
                         <h1>eleso</h1>
                    </div>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='allNew' component={AllNew}/>
                        <Route path='category1' component={Category1}/>
                        <Route path='category2' component={Category2}/>
                        <Route path='category3' component={Category3}/>
                        <Route path='allproducts' component={AllProducts}/>
                          
                    </Switch>
                </div>
            </footer>
            </HashRouter>
        )
    }
}
export default Footer; 