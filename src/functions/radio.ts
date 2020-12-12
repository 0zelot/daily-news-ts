import fetch from "node-fetch";
import config from "../config";

const getRadio = async () => {
    let response;
    let result = await fetch(`${config.url}/api/radio`, config.headers);
    try {
        response = await result.json();
        for(const i in response.data) {
            response.data[i].image = `${config.url}/radio/${i.toUpperCase()}.png`
        }    
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

    return response;
}

export = {getRadio};