import '../../../css/chat/emptyChat.css';





function EmptyChat() {
    return (
        <div className='emptyChatMain'>

            <div className='emptyChatContainer'>
                <div className='emptyChatUpperDiv'>
                    <img width="100%" height="350px" src='https://i0.wp.com/downtowncoreneighbourhood.ca/wp-content/uploads/2022/07/Lets-Chat.png?resize=768%2C432&ssl=1' alt='' />
                    {/* <img width="100%" height="100%" src='https://images.squarespace-cdn.com/content/v1/5bc8fcdefd679301ed74ef1b/1540072390391-X457NFQB1KXA9LST6SN5/spencer-watson-335298-unsplash.png?format=2500w' alt='' /> */}
                </div>
                <div className='emptyChatBottomDiv'>
                    <h2>Welcome to Let's Chat</h2>
                    <h4>Now you can send and receieve messages from you friends and family members</h4>
                </div>
                <div>
                    {/* <img width="100%" height="80%" src='https://i0.wp.com/downtowncoreneighbourhood.ca/wp-content/uploads/2022/07/Lets-Chat.png?resize=768%2C432&ssl=1' alt='' /> */}
                    <img width="100%" height="350px" src='https://images.squarespace-cdn.com/content/v1/5bc8fcdefd679301ed74ef1b/1540072390391-X457NFQB1KXA9LST6SN5/spencer-watson-335298-unsplash.png?format=2500w' alt='' />
                </div>

            </div>
        </div>
    );
}

export default EmptyChat