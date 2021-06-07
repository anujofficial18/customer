import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import Orderinfo from "./Orderinfo";
import Personalinfo from "./Personalinfo";
import Wishinfo from "./Wishinfo";

export default function Customerinfo() {
    const [showprsnl, changeShowpersonaldetail] = useState(false)
    const [showorder, changeShoworderdetail] = useState(false)
    const [showwish, changeShowwishdetail] = useState(false)
    return (
        <div>
            <Header />
            <div className="d-flex">
                <div className=" border-right p-0">
                    
                    <p className="m-0 ">
                        <a class="btn btn-outline-Dark  text-uppercase border-bottom w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(false)
                                changeShowwishdetail(false)
                                changeShowpersonaldetail(true)
                            }}>
                            account informantion
                        </a>
                    </p>
                





                    <p className="m-0 ">
                        <a class="btn btn-outline-Dark  text-uppercase border-bottom w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(true)
                                changeShowwishdetail(false)
                                changeShowpersonaldetail(false)
                            }}>
                             orders
                        </a>
                    </p>
                   
                    <p className="m-0 ">
                        <a class="btn btn-outline-Dark  text-uppercase border-bottom w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(false)
                                changeShowwishdetail(true)
                                changeShowpersonaldetail(false)
                            }}>
                            whishlist
                        </a>
                    </p>
                </div>
                
                <div className="col-md-9">
                    {showorder && <Orderinfo />}

                    {showwish && <Wishinfo />}
                    {showprsnl && <Personalinfo />}
                </div>
            </div>
        </div>
    )
}
