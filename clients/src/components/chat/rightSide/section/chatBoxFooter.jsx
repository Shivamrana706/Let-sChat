import '../../../../css/chat/rightSide/footer.css';

import { BsEmojiSmile } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr'
import { IoSendSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';

import { AccountContext } from '../../../../context/accountProvider';
import { newMessage } from '../../../../services/api';


const Footer = ({ conversation }) => {

    const [inputValue, setInputValue] = useState('');
    const [incomingMsg, setIncomingMsg] = useState(null);

    const { person, account, socket, setMessages, messsage } = useContext(AccountContext);




    useEffect(() => {
        incomingMsg && conversation?.members?.includes(incomingMsg.senderId) && setMessages(prev => [...prev, incomingMsg])
        console.log('incomingMsg :', incomingMsg);

    }, [incomingMsg, conversation])


    const soketFunction = () => {
        socket.current.on('getMessage', msgdata => {

            setIncomingMsg({
                ...msgdata,
                createdAt: Date.now()
            })
            // console.log("inside data", msgdata);

        })
    }
    useEffect(() => {
        soketFunction();
        // console.log("fjasdlkjfklasdjkl");
    }, [])




    const setText = async (e) => {
        // const value = e.target.value.trim();
        // console.log('value traim  :', value);
        const code = e.keyCode || e.which
        if (code == 13) {
            let messsage = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: inputValue
            }
            socket.current.emit('sendMessage', messsage);
            await newMessage(messsage);

            setInputValue('');
            setIncomingMsg(null)
        }

    }

    return (
        <div className='footermain'>
            <div className='footerIconDiv'>
                <BsEmojiSmile size={20} />
                <GrAttachment size={20} />
            </div>
            <div className='footerInputDiv '>
                <input
                    className='footerInputField'
                    type='text'
                    placeholder='Enter the message'
                    onChange={(e) => setInputValue(e.target.value.trim())}
                    onKeyPress={(e) => setText(e)}
                    value={inputValue}
                    required
                />
                <IoSendSharp color='white' className='footerSendIcon' />
            </div>

        </div>
    )
}

export default Footer;