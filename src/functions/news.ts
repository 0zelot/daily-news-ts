import fetch from "node-fetch";
import config from "../config";

const getNews = async (lang: string, country: string, topic: string, query: string) => {
    if(query) {
        try {
            const result = await fetch(`${config.url}/api/news/${lang}/${country}/ALL?q=${query}`);
            return await result.json();
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    } else {
        try {
            const result = await fetch(`${config.url}/api/news/${lang}/${country}/${topic || "ALL"}`);
            return await result.json();
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    }

}

export = {getNews};