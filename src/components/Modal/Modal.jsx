import React from 'react';
import modalImg from "../../assets/Group.png"

const Modal = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-4/5 mx-auto">
                    <div className='flex justify-center items-center mt-6'>
                        <img src={modalImg} alt={`${modalImg} image`} />
                    </div>
                    <h3 className="font-bold text-lg text-center mt-6">Payment Successfully</h3>
                    <div className='divider'></div>
                    <div className="py-4 text-[#09080F99] text-center -mt-6">
                        <p>Thanks for purchasing.</p>
                        <p className="py-4 text-[#09080F99] text-center">Total:2449.96</p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className='w-full -mt-8 pb-4'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full rounded-[32px]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;