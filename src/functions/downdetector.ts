import fetch from "node-fetch";
import config from "../config";

const getDownServices = async () => {
    try {
        const result = await fetch(`${config.url}/api/downdetector`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }
}

export = {getDownServices};