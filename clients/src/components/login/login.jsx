import '../../css/login/login.css'

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';

import { AccountContext } from '../../context/accountProvider';
import { addUser } from '../../services/api';

const Login = () => {

    const { setAccount } = useContext(AccountContext);
    const onLoginSuccess = (res) => {
        const decoded = jwt_decode(res.credential)
        setAccount(decoded);
        addUser(decoded);
    }

    return (
        <div className='container Main'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-sm-4 Container'>
                    <div className='firstDiv'>
                        <img width="100%" height="100%" src='https://cdn.dribbble.com/users/4015858/screenshots/7145489/media/a2e839a0b43c99572fc8d9161e04d881.png' alt='logo' />
                    </div>
                    <div className='secondDiv'>
                        <h3>Welcome to Let's Chat</h3>
                        <h4>Please signin using google account:-</h4>
                    </div>
                    <div className='thirdDiv'>
                        {/* <img width="70%" height="100%" src='https://www.linkpicture.com/q/imageGoogeSign.png' alt='signinlogo' /> */}
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={(res) => {
                                console.log('Login Failed', res);
                            }}
                        />;
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login