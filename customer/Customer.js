import React from 'react'
import Structure from '../../../Components/Structure'


export default function Customer() {
    return (
        <Structure>
            <div className="row">

                <div className="col-md-12 pl-0 d-flex ">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <a href="/Customerinfo" className="btn btn-outline-primary m-2">details</a>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <a  className="btn btn-outline-primary m-2">details</a>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <a className="btn btn-outline-primary m-2">details</a>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <a className="btn btn-outline-primary m-2">details</a>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <a className="btn btn-outline-primary m-2">details</a>
                            </tr>
                        </tbody>
                    </table>




                </div>





            </div>


        </Structure>
    )
}
