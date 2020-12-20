import fetch from "node-fetch";
import config from "../config";


const searchSongs = async (query: string) => {
    let response;
    if(query) {
        let result = await fetch(`${config.url}/api/songs?q=${query}`, config.headers);
        try {
            const response = await result.json();
            return response;
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    } else {
        return ({
            success: false,
            error: "Required parameters: query. See readme for help."
        });
    }

    return response;
}

export = {searchSongs};