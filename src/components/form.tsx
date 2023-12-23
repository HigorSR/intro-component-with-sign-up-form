import BtnSubmit from "./btn-submit";
import TermsServices from "./terms-services";

function Form() {
    return (
        <form className='flex flex-col gap-6 py-6 px-4 bg-white rounded-xl shadow'>
            <input
                type="text"
                placeholder='First Name'
                className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />

            <input
                type="text"
                placeholder='Last Name'
                className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />
            
            <input
                type="text"
                placeholder='Email Address'
                className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />
            
            <input
                type="password"
                placeholder='Password'
                className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />

            <BtnSubmit />

            <TermsServices />
        </form>
    );
}

export default Form;