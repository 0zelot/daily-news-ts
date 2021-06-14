import fetch from "node-fetch";
import config from "../config";

const getWeather = async (type: string, lang: string, units: string, place: string) => {
    if(type && lang && units) {
        let p;
        if(place.includes(",")) {
            p = place.split(",");
        } else {
            p = place;
        }
        try {
            const result = await fetch(`${config.url}/api/weather/${type}/${lang}/${units}?place=${p}&lat=${p[0] || null}&lon=${p[1] || null}`);
            return await result.json();
        } catch {
            return ({
                success: false,
                error: "Could not connect with API or bad response."
            });
        }
    } else {
        return ({
            success: false,
            error: "Invalid parameters: type, lang, units. See docs for more."
        });
    }
}

export = {getWeather};