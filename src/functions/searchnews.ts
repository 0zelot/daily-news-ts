import fetch from "node-fetch";
import config from "../config";


const searchNews = async (lang: string, country: string, query: string) => {
    let response;
    if(lang && country && query) {
        let result = await fetch(`${config.url}/api/news/${lang.toLowerCase()}/${country.toLowerCase()}?q=${query}`, config.headers);
        try {
            const res = await result.json();
            if(res.items || (res.items > 0)) {
                response = res;
            } else {
                return ({
                    success: false,
                    error: "Could not found any articles."
                });
            }
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    } else {
        return ({
            success: false,
            error: "Required parameters: lang, country, query. See readme for help."
        });
    }

    return response;
}

export = {searchNews};