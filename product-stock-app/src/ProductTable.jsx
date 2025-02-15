function ProductTable(){


    return(
        <div className="table">
            <table >
                <tr className="tableGrid">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr aria-colspan={2}>
                    <td>Fruits</td>
                </tr>

                <tr aria-colspan={2}>
                <td >Vegetables</td>
                </tr>
            </table>
        </div>
    )
}


export default ProductTable