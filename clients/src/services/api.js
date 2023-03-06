import axios from 'axios'


const url = 'http://localhost:8000';
export const addUser = async (data) => {

    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("Error while calling AddUser api ", error)
    }

}


export const getUsers = async () => {
    try {
        const allUser = await axios.get(`${url}/getUser`);
        return allUser;
    } catch (error) {
        console.log("Error while Calling GetUser api", error);
    }
}

export const setConversation = async (data) => {

    try {
        return await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log("Error while Calling setConversation api", error);
    }
}

export const getConversation = async (data) => {
    try {
        const conversationData = await axios.post(`${url}/conversation/get`, data);
        return conversationData
    } catch (error) {
        console.log("Error while Calling getConversation api", error);
    }
}


export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/messages/add`, data);

    } catch (error) {
        console.log("Error while Calling NewMagges api", error);
    }
}

export const getMessages = async (id) => {
    try {
        const response = await axios.get(`${url}/messages/get/${id}`);
        return response.data
    } catch (error) {
        console.log("Error while Calling getMaggeses api", error);
    }
}