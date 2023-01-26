import React from 'react'
import './index.css'
export default function Index() {
    return (
        <>
            <div className='mainContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon1'>Label</span>
                                </div>
                                <input type='text' className='form-control' placeholder='Username' aria-label='Label' aria-describedby='basic-addon1' />
                            </div>
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon1'>Logo</span>
                                </div>
                                <input type='text' className='form-control' placeholder='Username' aria-label='Logo' aria-describedby='basic-addon1' />
                            </div>

                            <div className='input-group mb-3'>
                                <div className='input-group-prepend'>
                                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                </div>
                                <select className='custom-select' id='inputGroupSelect04'>
                                    <option selected>Choose...</option>
                                    <option value='flat'>Flat</option>
                                    <option value='plastic'>Plastic</option>
                                    <option value='for-the-badge'>Squared Bold</option>
                                    <option value='flat-square'>Squared</option>
                                </select>

                            </div>

                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon1'>Color  </span>
                                </div>
                                <input type='text' className='form-control' placeholder='Username' aria-label='Color' aria-describedby='basic-addon1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
