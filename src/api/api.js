import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchAlbums = async () => {
    try{
        const res = axios.get(`${ENDPOINT}/albums/top`);
        return (await res).data;
    }catch(error){
        console.log(error);
    }
}