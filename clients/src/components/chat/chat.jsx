import '../../css/chat/chat.css'

import { useContext } from 'react';

import Menu from './leftSide/menu'
import EmptyChat from './rightSide/emptyChat';
import ChatBox from './rightSide/chatBox';
import { AccountContext } from '../../context/accountProvider';



const Chat = () => {

    const { person } = useContext(AccountContext);

    return (
        <div className="main">
            <div className='container'>
                <div className="leftDiv">
                    <Menu />
                </div>
                <div className="rightDiv">
                    {Object.keys(person).length ?
                        <ChatBox /> :
                        <EmptyChat />}
                </div>
            </div>

        </div>
    )
}

export default Chat 