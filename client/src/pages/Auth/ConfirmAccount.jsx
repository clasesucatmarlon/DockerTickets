import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import api from '../../lib/Axios';
import Input from '../../components/commons/Input';
import Label from '../../components/commons/Label';

const ConfirmAccount = () => {
    const [tokenConfirmation, setTokenConfirmation] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!tokenConfirmation) {
            return toast.error('El token es obligatorio');
        }

        try {
            const { data } = await api.post('/users/confirm-account', {
                token: tokenConfirmation,
            });

            if (data.response === 'success') {
                toast.success(data.message);
                setTokenConfirmation('');
                navigate('/auth/login');
            }
        } catch (error) {
            console.log(`[CREATE_USER_ERROR]: ${error}`);
            toast.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={onSubmit} className='space-y-7'>
            <div className='w-full max-w-lg relative'>
                <Label contentLabel="Token confirmación"/>
                <Input idInput="token" contentPlaceholder="123456" contentValue={tokenConfirmation} funcChange={setTokenConfirmation}/>
            </div>
            <div>
                <button
                    type='submit'
                    className='w-full bg-black text-white rounded-full py-3 px-5'
                >
                    Confirmar cuenta
                </button>
            </div>
            <div className='text-center'>
                <p>
                    ¿Ya tengo cuenta{' '}
                    <Link to='/auth/login' className='font-bold hover:underline'>
                        Ingresar
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default ConfirmAccount;