import { useContext, useEffect, useState } from "react";

import Header from "./section/chartboxHeader";
import '../../../css/chat/rightSide/chatBox.css'
import Messages from "./section/messages";
import Footer from "./section/chatBoxFooter";

import { AccountContext } from "../../../context/accountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {

    const { person, account } = useContext(AccountContext);
    const [conversation, setConversation] = useState([]);

    const getConversationDetail = async () => {
        let { data } = await getConversation({ senderId: account.sub, receiverId: person.sub })
        setConversation(data);
    }

    useEffect(() => {
        getConversationDetail();

    }, [conversation._id, person._id,]);

    return (
        <div className="rightSideMain">
            <Header person={person} />
            <Messages person={person} conversation={conversation} />
            <Footer conversation={conversation} />
        </div>
    )
}

export default ChatBox;