import React, { useRef, useState } from 'react'
import * as api from '../../api/apiCalls'
import Addsvg from '../../../public/img/add_information.svg'
import { RiAlertFill } from 'react-icons/ri'

export default function AddProduct() {
    const productNameRef = useRef()
    const productPriceRef = useRef()
    const productQtyRef = useRef()
    const [message, setMessage] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleSubmit = async () => {
        if(productNameRef.current.value === ""){
            setHasError(true)
            return setMessage('Please Fill the Product Name Field')
        }
        
        if(productPriceRef.current.value === ""){
            setHasError(true)
            return setMessage('Please Fill the Product Price Field')
        }
        
        if(productPriceRef.current.value !== ""){
            const reg = new RegExp('^[0-9]+$');
            if(!reg.test(productPriceRef.current.value)){
                setHasError(true)
                return setMessage('Price should be a number')
            }
        }

        const data = {
            name: productNameRef.current.value,
            price: productPriceRef.current.value,
            qty: productQtyRef.current.value || 0
        }
        try {
            const res = await api.addProduct(data)
            setMessage(res.data.message)
        } catch (error) {
            console.log(error);
        }
        productNameRef.current.value = ""
        productPriceRef.current.value = ""
        productQtyRef.current.value = ""
        setHasError(false)
    }

    const handleReset = async () => {
        setMessage('')
        setHasError(false)
        productNameRef.current.value = ""
        productPriceRef.current.value = ""
        productQtyRef.current.value = ""
    }

    return (
        <div className="layout">
            <img className="layout-img" src={Addsvg} alt="Alt" />

            <div className="wrapper">
                <div className="form-box">
                    <input className="inputbox" 
                        type="text" 
                        placeholder="Product Name*" 
                        style={hasError ? { border: '1px solid red' } : {} }
                        ref={productNameRef} 
                    />
                    <input className="inputbox" 
                        type="text" 
                        placeholder="Product Price*" 
                        style={hasError ? { border: '1px solid red' } : {} }
                        ref={productPriceRef} 
                    />
                    <input className="inputbox" 
                        type="text" 
                        placeholder="Product Qty (Optional)" 
                        style={hasError ? { border: '1px solid red' } : {} }
                        ref={productQtyRef} 
                    />
                    <div className="buttonbox">
                        <div className="resetbutton" onClick={handleReset}>Reset</div>
                        <div className="submitbutton" onClick={handleSubmit}>Submit</div>
                    </div>
                    {
                        message === ''
                        ?
                        ''
                        :
                        <div className="errorbox"><RiAlertFill /> <span>{ message }</span></div>
                    }
                </div>
            </div>
        </div>
    )
}
