import React from 'react'
import AllNew from './AllNew'
import Category1 from './category1'
import Category2 from './categoty2'
import Category3 from './category3'
class AllProducts extends React.Component{
    render (){
        return(
            <div>
                <AllNew/>
                <Category1/>
                <Category2/>
                <Category3/>

            </div>
        )
    }
}
export default AllProducts;