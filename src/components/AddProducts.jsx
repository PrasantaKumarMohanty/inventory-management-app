import React, { useState } from 'react';

const AddProducts = (props) => {

    const [pid, setPid] = useState('');
    const [name, setName] = useState('');
    const [vendor, setVendor] = useState('');
    const [price, setPrice] = useState('');
    const [bnum, setBnum] = useState('');
    const [bdate, setBdate] = useState('');
    const [quantity, setQuantity] = useState('');
    // let n = []


    const handleAddProduct = () => {
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        const newObject = { pid, name, vendor, price, bnum, bdate, quantity };

        existingProducts.push(newObject);
        localStorage.setItem('products', JSON.stringify(existingProducts));

        props.setAddView(false)
        props.setEditView(false)
        props.setForView(true)
    };

    return (
        <div className='text-center'>
            <div className='mb-5 font-bold text-lg bg-pink-700'>Add inventory Product</div>

            <div className='text-center'>
                <div>
                    <label>Id:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={pid} onChange={(e) => setPid(e.target.value)} />
                </div>

                <div>
                    <label>Name:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label>Vendor:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} />
                </div>

                <div>
                    <label>MRP:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div>
                    <label>Batch num:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={bnum} onChange={(e) => setBnum(e.target.value)} />
                </div>

                <div>
                    <label>Batch date:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={bdate} onChange={(e) => setBdate(e.target.value)} />
                </div>

                <div>
                    <label>Quantity:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button className='bg-blue-600 px-10' onClick={handleAddProduct}>Add</button>
            </div>
        </div>
    );
};

export default AddProducts;
