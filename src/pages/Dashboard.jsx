import React, { useEffect, useState } from 'react'
import AddProducts from '../components/AddProducts';
import ProductList from '../components/ProductList';
import EditProducts from '../components/EditProducts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    let usersType = JSON.parse(localStorage.getItem('finalUser'));
    const [addView, setAddView] = useState(false);
    const [editView, setEditView] = useState(false);
    const [forView, setForView] = useState(false);
    const [idForEdit, setIdForEdit] = useState();

    const logout = () => {
        localStorage.removeItem('finalUser');
        navigate('/');
    }


    return (
        <div>
            <div className='flex justify-end'>
                <button
                    onClick={logout}
                    className='bg-rose-500 m-5 p-2 '>Log Out</button>
            </div>
            {
                usersType != undefined
                    &&
                    usersType[0].type === "Store-manager"
                    ?
                    <>
                        <div className='flex justify-center text-lg font-extrabold'>User Type : Store-manager</div>
                        <div className='flex justify-center text-lg font-extrabold'>...................................................................</div>

                        <div className='flex justify-center'>
                            <button onClick={() => {
                                setEditView(false);
                                setForView(false);
                                setAddView(true);
                            }} className='bg-purple-700 font-semibold text-white m-5 p-2 rounded'>ADD</button>
                            <button onClick={() => {
                                setAddView(false);
                                setEditView(false);
                                setForView(true)
                            }} className='bg-purple-700 font-semibold text-white m-5 p-2 rounded'>VIEW</button>
                        </div>
                        {
                            addView
                            &&
                            <AddProducts
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView}
                            />
                        }

                        {
                            forView
                            &&
                            <ProductList
                                idForEdit={idForEdit}
                                setIdForEdit={setIdForEdit}
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView} />
                        }

                        {
                            editView
                            &&
                            <EditProducts
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView}
                                idForEdit={idForEdit}
                            />
                        }

                    </>
                    :
                    <>
                        <div className='flex justify-center text-lg font-extrabold'>User Type : Department-manager</div>
                        <div className='flex justify-center text-lg font-extrabold'>...................................................................</div>

                        <div className='flex justify-center'>
                            <button onClick={() => {
                                setAddView(true);
                                setEditView(false);
                                setForView(false);
                            }} className='bg-purple-700 font-semibold text-white m-5 p-2 rounded'>ADD</button>
                            <button onClick={() => {
                                setAddView(false);
                                setEditView(false);
                                setForView(true);
                            }} className='bg-purple-700 font-semibold text-white m-5 p-2 rounded'>VIEW</button>
                        </div>

                        {
                            addView
                            &&
                            <AddProducts
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView}
                            />
                        }

                        {
                            forView
                            &&
                            <ProductList
                                idForEdit={idForEdit}
                                setIdForEdit={setIdForEdit}
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView} />
                        }

                        {
                            editView
                            &&
                            <EditProducts
                                setEditView={setEditView}
                                setAddView={setAddView}
                                setForView={setForView}
                                idForEdit={idForEdit}
                            />
                        }
                    </>
            }
            
        </div>
    )
}

export default Dashboard
