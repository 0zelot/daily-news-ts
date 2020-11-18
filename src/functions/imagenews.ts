import fetch from "node-fetch";
import config from "../config";

const imageNews = async (link: string) => {
    let response;
    if(link) {
        let result = await fetch(`${config.url}/api/image?link=${link}`, config.headers);
        try {
            response = await result.json();
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    } else {
        return ({
            success: false,
            error: "Required parameters: link. See readme for help."
        });
    }
    return response;
}

export = {imageNews};