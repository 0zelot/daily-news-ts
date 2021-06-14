import fetch from "node-fetch";
import config from "../config";

const getRadio = async (station: string) => {
    try {
        const result = await fetch(`${config.url}/api/radio/${station || "ALL"}`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }
}

export = {getRadio};