import '../../../../css/chat/menu.css'
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineSetting } from 'react-icons/ai';




const LeftBar = ({ account }) => {
    return (
        <>
            <div className='leftSideImageDiv'>
                <img src={account.picture} height="40" width="40" borderRadius="50%" alt='dp' className='dpImage' />

            </div>
            <div className='leftSideOtherIcon'>
                <BsFillChatDotsFill color='white' size={30} />
            </div>
            <div className='leftSideSettingIcon'>
                <AiOutlineSetting size={30} />
            </div>
        </>
    )
}


export default LeftBar;