import fetch from "node-fetch";
import config from "../config";

const getCrypto = async () => {
    let response;
    let result = await fetch(`${config.url}/api/crypto`, config.headers);
    try {
        response = await result.json();
        for(const i in response.data) {
            response.data[i]["image"] = `${config.url}/crypto/${i.toUpperCase()}.png`;
        }
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

    return response;
}

export = {getCrypto};