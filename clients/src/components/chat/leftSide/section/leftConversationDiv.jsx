import '../../../../css/chat/menu.css'

import Conversations from './conversations';


const LeftConversation = () => {
    return (
        <>
            <div className='rightSideTopDiv'>
                <div className='rightSideTopDivRealative'>
                    <input type="text" className='rightSidetopDivInputField' placeholder='Enter the name' />
                </div>
            </div>
            <div className='rightSideBottom'>
                <Conversations />
            </div>
        </>
    )
}


export default LeftConversation;    