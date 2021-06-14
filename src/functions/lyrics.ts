import fetch from "node-fetch";
import config from "../config";

const getLyrics = async (query: string, onlyLyrics: boolean, limit: number) => {
    try {
        const result = await fetch(`${config.url}/api/lyrics?q=${query}&onlyLyrics=${onlyLyrics}&limit=${limit || 1}`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }

}

export = {getLyrics};