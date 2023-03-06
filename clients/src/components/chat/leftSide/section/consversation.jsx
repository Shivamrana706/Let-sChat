import '../../../../css/chat/leftSide.css';

import { useContext } from 'react';

import { AccountContext } from '../../../../context/accountProvider';
import { setConversation } from '../../../../services/api';


function Conversation({ chatingPerson }) {

    const { setPerson, account } = useContext(AccountContext);


    const getPerson = async () => {
        setPerson(chatingPerson);
        await setConversation({ senderId: account.sub, receiverId: chatingPerson.sub });
    };

    return (
        <div className="conversationItem" onClick={() => getPerson()}>
            <div className='conversationLeftDiv'>
                <img src={chatingPerson.picture} className='conversationIcon' alt='' width={30} height={30} />
            </div>
            <div className='conversationRightDiv'>
                {chatingPerson.name}
            </div>
        </div>
    );
}


export default Conversation;