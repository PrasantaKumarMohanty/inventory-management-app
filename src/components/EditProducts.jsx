import React, { useEffect, useState } from 'react';

const EditProducts = (props) => {
    let usersType = JSON.parse(localStorage.getItem('finalUser'));

    const [proArray, setProArray] = useState(
        usersType[0].type === "Store-manager"
            ?
            JSON.parse(localStorage.getItem('products'))
            :
            JSON.parse(localStorage.getItem('ApprovedProducts'))
    );


    const oneEditItem = proArray.filter((i) => i.pid == props.idForEdit);

    const [newPid, setnewPid] = useState(oneEditItem[0]?.pid);
    const [newName, setNewName] = useState(oneEditItem[0]?.name);
    const [newVendor, setnewVendor] = useState(oneEditItem[0]?.vendor);
    const [newPrice, setnewPrice] = useState(oneEditItem[0]?.price);
    const [neeBnum, setneeBnum] = useState(oneEditItem[0]?.bnum);
    const [newBdate, setnewBdate] = useState(oneEditItem[0]?.bdate);
    const [newQuantity, setnewQuantity] = useState(oneEditItem[0]?.quantity);
    // let n = []


    const handleAddProduct = () => {
        const newArr = proArray.filter((i) => i.pid !== props.idForEdit);

        console.log("pro", newArr)

        const newObject = { pid: newPid, name: newName, vendor: newVendor, price: newPrice, bnum: neeBnum, bdate: newBdate, quantity: newQuantity };

        newArr.push(newObject);
        if (usersType[0].type === "Store-manager") {
            localStorage.setItem('products', JSON.stringify(newArr));
        } else {
            localStorage.setItem('ApprovedProducts', JSON.stringify(newArr));
        }
        props.setEditView(false)
        props.setForView(true)

    };

    return (
        <div className='text-center'>
                <div className='mb-5 font-bold text-lg  bg-pink-700'>Edit your inventory Product</div>

            <div>
                {/* {console.log("pro", oneEditItem)} */}

                <div>
                    <label>Id:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={newPid} onChange={(e) => setnewPid(e.target.value)} />
                </div>

                <div>
                    <label>Name:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>

                <div>
                    <label>newVendor:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={newVendor} onChange={(e) => setnewVendor(e.target.value)} />
                </div>

                <div>
                    <label>MRP:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="number" value={newPrice} onChange={(e) => setnewPrice(e.target.value)} />
                </div>

                <div>
                    <label>Batch num:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={neeBnum} onChange={(e) => setneeBnum(e.target.value)} />
                </div>

                <div>
                    <label>Batch date:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="text" value={newBdate} onChange={(e) => setnewBdate(e.target.value)} />
                </div>

                <div>
                    <label>newQuantity:</label>
                    <input className='bg-stone-300 mb-4 ml-4' type="number" value={newQuantity} onChange={(e) => setnewQuantity(e.target.value)} />
                </div>
                <button className='bg-blue-600 px-10' onClick={handleAddProduct}>Change</button>
            </div>
        </div>
    );
};

export default EditProducts;
