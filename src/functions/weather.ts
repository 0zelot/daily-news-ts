import fetch from "node-fetch";
import config from "../config";

const getWeather = async (lang: string, degree: string, query: string) => {
    let response;
    if(lang && degree && query) {
        let result = await fetch(`${config.url}/api/weather/${lang}/${degree}?q=${query}`, config.headers);
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
            error: "Required parameters: lang, degree, query. See readme for help."
        });
    }

    return response;
}

export = {getWeather};