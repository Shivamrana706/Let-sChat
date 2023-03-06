import '../../../../css/chat/leftSide.css'

import { useEffect, useState, useContext } from "react"

import { getUsers } from '../../../../services/api';
import { AccountContext } from '../../../../context/accountProvider';
import Conversation from './consversation';


const Conversations = () => {
    const [users, setUsers] = useState([]);
    const { account, person, socket, setActiveUsers, setIncomingMsg } = useContext(AccountContext);

    let fetchData = async () => {
        const { data } = await getUsers()
        setUsers(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        socket.current.emit('onlineUser', account);
        socket.current.on('getOnlineUser', users => {
            setActiveUsers(users);
            console.log('users :', users);
        })

    }, [account])


    return (
        <div className="conversationMain">
            {
                users.map(item => (
                    item.sub !== account.sub &&
                    <Conversation chatingPerson={item} />
                ))
            }
        </div >
    )
}

export default Conversations;