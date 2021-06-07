import React from 'react'

export default function Wishinfo() {
    return (
        <div>
             <div className="wish">
                        <h2 className="text-center">  whishlist</h2>
                <div className="row ">
                    <div className="col-md-10 d-flex offset-1 shadow bg-white">
                        <div className=" col-md-3 item-img p-3 ">
                        <img src="http://source.unsplash.com/random/100x100"></img>

                        </div>
                        <div className=" col-md-3 item-detail p-3">
                        <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                        </div>
                        <div className="col-md-6 text-right mt-5">

                        <button class=" btn px-0 text-primary">Remove</button>
                        </div>

                       
                    </div>
        </div>
        </div>
        </div>
    )
}
