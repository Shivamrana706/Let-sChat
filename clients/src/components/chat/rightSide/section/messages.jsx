import '../../../../css/chat/rightSide/messages.css'
import { useEffect, useState, useContext, useRef } from 'react';

import { getMessages } from "../../../../services/api";
import { formatDate } from '../../../../utils/comon-utils'
import { AccountContext } from '../../../../context/accountProvider';


const Messages = ({ person, conversation }) => {

    const [incomingMsg, setIncomingMsg] = useState([]);

    const { account, messages, setMessages, messsage, socket } = useContext(AccountContext);


    const scrollRef = useRef();

    useEffect(() => {
        const getAllMessages = async (conversation) => {
            const data = await getMessages(conversation._id);
            setMessages(data)

        }
        conversation._id && getAllMessages(conversation);

    }, [conversation?._id, person._id]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages])


    return (
        <div className="messagesMain" >
            {
                messages.map(item => (
                    account.sub === item.senderId ?
                        <div className='messagesAccountContainer'>
                            <p className='messageText'>{item.text}</p>
                            <p className='messageDate'>{formatDate(item.createdAt)}</p>
                        </div> :
                        <div className='messagesPersonContainer'>
                            <p className='messageText'>{item.text}</p>
                            <p className='messageDate'>{formatDate(item.createdAt)}</p>
                        </div>
                ))

            }
            <div ref={scrollRef} />
        </div>
    )
}

export default Messages;