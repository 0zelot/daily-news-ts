import fetch from "node-fetch";
import config from "../config";

const getLyrics = async (query: string, onlyLyrics: boolean, limit: number) => {
    try {
        let url = `${config.url}/api/v2/lyrics?q=${query}&limit=${limit || 1}`;
        if(onlyLyrics) url = `${config.url}/api/v2/lyrics?q=${query}&onlyLyrics=true&limit=${limit || 1}`;
        const result = await fetch(url);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

}

export = {getLyrics};