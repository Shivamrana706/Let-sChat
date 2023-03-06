import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = [];


const addUser = (onlineUserData, socketId) => {
    !users.some(user => user.sub == onlineUserData.sub) && users.push({ ...onlineUserData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.sub == userId);


}

io.on('connection', (socket) => {
    console.log("user connected Scoket.io");

    socket.on('onlineUser', onlineUserData => {

        addUser(onlineUserData, socket.id);
        // console.log('socket.id :', socket.id);
        io.emit('getOnlineUser', users);
    })

    socket.on('sendMessage', data => {

        const user = getUser(data.receiverId)
        // console.log('user :', user);
        // console.log('data :', data);

        io.emit('getMessage', data);
    })
})


