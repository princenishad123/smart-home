import { io } from "socket.io-client";


const url = process.env.NEXT_PUBLIC_NODE_ENV !== "dev" ? process.env.NEXT_PUBLIC_SERVER_URL: "http://localhost:8080"

const socket =  io(url,{
   withCredentials:true
});
export default socket