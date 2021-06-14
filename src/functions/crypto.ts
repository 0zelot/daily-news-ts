import fetch from "node-fetch";
import config from "../config";

const getCrypto = async () => {
    try {
        const result = await fetch(`${config.url}/api/crypto`);
        return await result.json();
    } catch {
        return ({
            success: false,
            error: "Could not connect with API or bad response."
        });
    }
}

export = {getCrypto};