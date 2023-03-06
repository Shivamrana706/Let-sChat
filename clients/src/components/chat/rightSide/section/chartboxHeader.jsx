import '../../../../css/chat/rightSide/header.css'

import { BsFillChatFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';

import { useContext } from 'react';
import { AccountContext } from '../../../../context/accountProvider';



const Header = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (
        <div className="headerMain">
            <div className="headerImage">
                <img width={40} height={40} style={{ borderRadius: "50% " }} src={person.picture} alt='' />
            </div>
            <div className="headerName">
                <p className='headerPersonName'>{person.name}</p>
                <p className='headerPersonStatus'>
                    {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}

                </p>

            </div>
            <div className="headerOther">
                <BsFillChatFill size={20} />
                <IoMdCall size={20} />
                <BsFillCameraVideoFill size={20} />

            </div>
        </div>
    )
}

export default Header;