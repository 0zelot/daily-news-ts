# Description
The library allows you to retrieve the following informations:
* news (from Google News RSS)
    * general news,
    * news by categories,
    * searching news,
    * article's image,
* weather (from MSN)
    * current weather for specified city,
    * forecast for specified city,
* moon (from mooncalc)
    * phase,
    * trajectory,
    * constellation,
* cryptocurrency rates (from GDAX API)
    * rates and images for: Bitcoin, Ether, Bitcoin Cash, Litecoin, Stellar.

# Installation and usage

`npm install daily-news-ts --save`

```
const news = require("daily-news-ts")
```

# Guide

* **getNews(LANG, COUNTRY)**<br>
    Example:
    ```
    news.getNews("en", "us").then(json => {
        console.log(json);
    })
    ```

* **getNews(LANG, COUNTRY, CATEGORY)**<br>
    Categories: `WORLD`, `NATION`, `BUSINESS`, `TECHNOLOGY`, `ENTERTAINMENT`, `SPORTS`, `SCIENCE`, `HEALTH`.<br><br>
    Example:
    ```
    news.getNews("pl", "pl", "TECHNOLOGY").then(json => {
        console.log(json);
    })
    ```

* **searchNews(LANG, COUNTRY, QUERY)**<br>
    Example:
    ```
    news.getNews("en", "us", "apple").then(json => {
        console.log(json);
    })
    ```

* **imageNews(LINK TO ARTICLE)**<br>
    Example:
    ```
    news.imageNews("https://spidersweb.pl/2020/11/xcloud-na-pc-windows-tak-dziala.html").then(json => {
        console.log(json);
    })
    ```

* **getWeather(LANG, DEGREE, QUERY)**<br>
    Degree types: `C`, `F`.<br><br>
    Example:
    ```
    news.getWeather("es", "C", "Madrid").then(json => {
        console.log(json);
    })
    ```

* **getMoon()**<br>
    Example:
    ```
    news.getMoon().then(json => {
        console.log(json);
    })
    ```

* **getCrypto()**<br>
    Example:
    ```
    news.getCrypto().then(json => {
        console.log(json);
    })
    ```
    <br>

<hr>

Released on the [MIT license](https://choosealicense.com/licenses/mit/).<br>
See at [NPMJS](https://www.npmjs.com/package/daily-news-ts).<br>
See at [GITHUB](https://github.com/0zelot/daily-news-ts).
