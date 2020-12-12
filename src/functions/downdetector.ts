import fetch from "node-fetch";
import config from "../config";

const getDown = async () => {
    let response;
    let result = await fetch(`${config.url}/api/downdetector`, config.headers);
    try {
        response = await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

    return response;
}

export = {getDown};