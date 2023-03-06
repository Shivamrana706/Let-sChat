import '../../../css/chat/menu.css'
import { useContext } from 'react';
import { AccountContext } from '../../../context/accountProvider';
// import { BiSearch } from 'react-icons/bi'


import LeftBar from './section/leftBar';
import LeftConversation from './section/leftConversationDiv';


const Menu = () => {

    const { account } = useContext(AccountContext);

    return (
        <div className='leftSideContainer'>
            <div className='leftSideLeftDiv'>
                <LeftBar account={account} />
            </div>
            <div className='leftSideRightDiv'>
                <LeftConversation />
            </div>
        </div>
    )
}

export default Menu;