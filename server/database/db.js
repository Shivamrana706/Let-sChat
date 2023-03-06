import mongoose from "mongoose";

const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@clusterletschat.not3hlw.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("Databse connnection sucessfully");
    } catch (error) {
        console.log("Error while connnecting database", error);
    }
}

export default Connection