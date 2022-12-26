import fetch from "node-fetch";
import config from "../config";

const getRadio = async (country: string, station: string) => {
    try {
        const result = await fetch(`${config.url}/api/v2/radio/${country}/${station}`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }
}

export = {getRadio};