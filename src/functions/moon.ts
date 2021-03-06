import fetch from "node-fetch";
import config from "../config";

const getMoon = async () => {
    try {
        const result = await fetch(`${config.url}/api/moon`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }
}

export = {getMoon};