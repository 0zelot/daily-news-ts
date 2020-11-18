import fetch from "node-fetch";
import config from "../config";

const getMoon = async () => {
    let response;
    let result = await fetch(`${config.url}/api/moon`, config.headers);
    try {
        response = await result.json();
        response.data["image"] = `${config.url}/moon/${response.data.phase.split(" ").join("_")}.png`;
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

    return response;
}

export = {getMoon};