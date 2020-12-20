import fetch from "node-fetch";
import config from "../config";


const getSong = async (id: string | number) => {
    let response;
    if(id) {
        try {
            let result = await fetch(`${config.url}/api/lyrics/${id}`, config.headers);
            const response = await result.json();
            return response;
        } catch {
            return ({
                success: false,
                error: "Could not connect with API, not found song with this ID or bad response."
            });
        }
    } else {
        return ({
            success: false,
            error: "Required parameters: id. See readme for help."
        });
    }

    return response;
}

export = {getSong};