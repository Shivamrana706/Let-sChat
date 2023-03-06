import { useContext } from "react"
import { AccountContext } from "../../context/accountProvider"

import Login from "../login/login"
import Chat from "../chat/chat"



const MainApp = () => {

    const { account } = useContext(AccountContext);


    return (
        <>
            {
                account ? <Chat /> :
                    <Login />
            }
        </>



    )
}

export default MainApp