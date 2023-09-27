import React, { useEffect, useState } from 'react'

const ProductList = (props) => {
    let usersType = JSON.parse(localStorage.getItem('finalUser'));

    const [allP, setAllp] = useState([]);
    const [appIndex, setAppIndex] = useState([]);
    const appsInd = JSON.parse(localStorage.getItem('pk')) || [];


    useEffect(() => {
        if (usersType[0].type === "Store-manager") {
            setAllp(JSON.parse(localStorage.getItem('products')));
        } else {
            setAllp(JSON.parse(localStorage.getItem('ApprovedProducts')));
        }
    }, []);

    const handleDeleteProduct = (index) => {

        const newProducts = allP.filter((_, i) => i !== index);

        localStorage.setItem('products', JSON.stringify(newProducts));
    };

    const handleEdit = (p) => {
        props.setIdForEdit(p)
        props.setEditView(true)
        props.setAddView(false)
        props.setForView(false)
    }

    const handleApprovedProduct = (index) => {
        setAppIndex([...appIndex, index]);
        

        const newProducts = allP.filter((_, i) => i == index);

        const existingProducts = JSON.parse(localStorage.getItem('ApprovedProducts')) || [];

        existingProducts.push(newProducts[0]);
        localStorage.setItem('ApprovedProducts', JSON.stringify(existingProducts));
    };

    return (
        <div>
            <div className='text-center'>
                <div className='mb-5 font-bold text-lg  bg-pink-700'>Product List</div>
                <div className='flex justify-center'>
                    <div >
                        {
                            allP != undefined
                            &&
                            allP.map((product, index) => (
                                <div className='bg-stone-400 mb-5 p-5 rounded'>
                                    <div className='' key={product.id}>
                                        Id: {product.pid},
                                        Name: {product.name},
                                        Price: {product.price},
                                        Qty: {product.quantity},
                                        Vendor: {product.vendor},
                                        Batch Num: {product.bnum},
                                        Batch Date: {product.bdate},
                                    </div>
                                    <button
                                        onClick={() => handleEdit(product.pid)}
                                        className='bg-fuchsia-500 text-white m-5 p-2'>Edit</button>
                                    <button
                                        onClick={() => handleDeleteProduct(index)}
                                        className='bg-fuchsia-500 text-white m-5 p-2'>Delete</button>

                                    {
                                        usersType[0].type === "Store-manager"
                                            ?
                                            appIndex.includes(index)
                                                ?
                                                <button className='bg-green-400 m-5 p-2'>Approved</button>

                                                :
                                                <button
                                                    onClick={() => handleApprovedProduct(index)}
                                                    className='bg-fuchsia-500 text-white m-5 p-2'>
                                                    Approve
                                                </button>
                                            : null
                                    }
                                </div>
                            ))}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
