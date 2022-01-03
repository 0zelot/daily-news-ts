# Description
Simple library for [open-api.klonba.xyz](https://open-api.klonba.xyz).

# Installation and usage

`npm install daily-news-ts --save`

```
const news = require("daily-news-ts")
```

# Guide

* **getNews(LANG, COUNTRY, ALL | TOPIC, QUERY)**<br>
    Example:
    ```
    await news.getNews("pt", "br", "SPORTS")

    await news.getNews("en", "us", "ALL", "SpaceX")
    ```
    Topics: `WORLD`, `NATION`, `BUSINESS`, `TECHNOLOGY`, `ENTERTAINMENT`, `SPORTS`, `SCIENCE`, `HEALTH`


* **getWeather(TYPE, LANG, UNITS, QUERY)**<br>
    Units types: `C`, `F`.<br><br>
    Example:
    ```
    await news.getWeather("city", "en", "f", "London")

    await news.getWeather("location", "es", "c", "55,37")
    ```

* **getMoon()**<br>
    Example:
    ```
    await news.getMoon()
    ```

* **getCrypto()**<br>
    Example:
    ```
    await news.getCrypto()
    ```

* **getDownServices()**<br>
    Example:
    ```
    await news.getDownServices()
    ```

* **getRadio(NAME || ALL)**<br>
    Example:
    ```
    await news.getRadio("ALL")

    await news.getRadio("RMF_FM")
    ```
    Stations: `ESKA`, `RMF_FM`, `RMF_MAXXX`, `ZET`, `VOX_FM`

* **getTV(NAME || ALL)**<br>
    Example:
    ```
    await news.getTV("ALL")

    await news.getTV("TVN_SIEDEM")
    ```
    Stations: `TVP_1`, `TVP_2`, `POLSAT`, `TVN`, `TVN_SIEDEM`

* **getLyrics(QUERY, ONLY LYRICS?, LIMIT)**<br>
    Example:
    ```
    await news.getLyrics("Adele", true, 3)

    await news.getLyrics("faded", false, 1)
    ```


    <br>
<hr>

Released on the [MIT license](https://choosealicense.com/licenses/mit/).<br>
See at [NPMJS](https://www.npmjs.com/package/daily-news-ts).<br>
See at [GITHUB](https://github.com/0zelot/daily-news-ts).<br>
