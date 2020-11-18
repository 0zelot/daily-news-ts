import fetch from "node-fetch";
import config from "../config";

const categories = ["WORLD", "NATION", "BUSINESS", "TECHNOLOGY", "ENTERTAINMENT", "SPORTS", "SCIENCE", "HEALTH"];

const getNews = async (lang: string, country: string, category: string) => {
    let response;
    if(lang && country) {
        if(category) {
            for(const i in categories) {
                if(categories[i] === category.toUpperCase()) {
                    let result = await fetch(`${config.url}/api/news/${lang.toLowerCase()}/${country.toLowerCase()}/${category.toUpperCase()}`, config.headers);
                    try {
                        response = await result.json();
                        return response;
                    } catch {
                        return ({
                            success: false,
                            error: "Could not connect with API or bad response."
                        });
                    }
                } else {
                    response = ({
                        success: false,
                        error: "Category not found. See readme for help."
                    });
                } continue;
            }
        } else {
            let result = await fetch(`${config.url}/api/news/${lang.toLowerCase()}/${country.toLowerCase()}`, config.headers);
            try {
                response = await result.json();
            } catch {
                return ({
                    success: false,
                    error: "Could not connect with API or bad response."
                });
            }
        }
    } else {
        return ({
            success: false,
            error: "Required parameters: lang, country (optional: category). See readme for help."
        });
    }

    return response;
}

export = {getNews};