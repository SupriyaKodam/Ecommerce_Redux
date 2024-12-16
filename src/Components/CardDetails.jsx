import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart, decrementQuantity, clearCart } from '../features/cartSlice';

const CardDetails = () => {
    const carts = useSelector((state) => state.allCart.carts); // Get the carts from Redux
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecrement = (id) => {
        dispatch(removeToCart(id));
    };

    const handleDecre = (id) => {
        dispatch(decrementQuantity({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className='mt-32 container mx-auto flex flex-col items-center justify-center'>
            <div className='bg-white shadow-lg w-auto h-auto p-5'>
                {/* Header Section */}
                <div className='flex flex-row items-center justify-between bg-black p-5 rounded-md'>
                    <h1 className='text-white font-bold'>Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h1>
                    {carts.length > 0 && (
                        <button onClick={handleClearCart} className="text-white p-3 bg-red-400 rounded-md flex items-center">
                            <DeleteIcon className="text-white" />
                            <span className="ml-2">Empty Cart</span>
                        </button>
                    )}
                </div>

                {/* Table Section */}
                <div className='flex flex-col my-5'>
                    {carts.length === 0 ? (
                        <div className='flex flex-col items-center justify-center'>
                            <ShoppingCartIcon style={{ fontSize: 40 }} className='mb-4 text-gray-400' />
                            <p className='text-3xl text-gray-400'>Your cart is empty</p>
                        </div>
                    ) : (
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className="p-2 border-b text-left">Action</th>
                                    <th className="p-2 border-b text-left">Product</th>
                                    <th className="p-2 border-b text-left">Name</th>
                                    <th className="p-2 border-b text-left">Price</th>
                                    <th className="p-2 border-b text-left">Qty</th>
                                    <th className="p-2 border-b text-left">Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-2">
                                            <button onClick={() => handleDecrement(item.id)}>
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                        <td className="p-2"><img src={item.imgdata} className='w-10' alt="Product" /></td>
                                        <td className="p-2">{item.dish}</td>
                                        <td className="p-2">{item.price}</td>
                                        <td className="p-2">
                                            <button className='p-px bg-blue-300' onClick={() => handleDecre(item.id)}><RemoveIcon /></button>
                                            <input type="text" className='border-2 border-gray-400 text-center w-[100px]' value={item.qnty} readOnly />
                                            <button className='p-px bg-blue-300' onClick={() => handleIncrement(item)}><AddIcon /></button>
                                        </td>
                                        <td className="p-2">{item.qnty * item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className='mt-3'>
                                <tr className=''>
                                    <th>&nbsp;</th>
                                    <th colSpan={3}>&nbsp;</th>
                                    <th className=''>Item In Cart<span className='ml-2 mr-2'>:</span><span>{carts.length}</span></th>
                                    <th>Total Price<span className='ml-2 mr-2'>:</span><span>{carts.reduce((acc, item) => acc + item.qnty * item.price, 0)}</span></th>
                                </tr>
                            </tfoot>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
