//參考資料:https://mrnegativetw.github.io/JavaScript-%E7%AD%86%E8%A8%98/%E7%B4%94Javascript%E7%88%AC%E8%9D%A6%E7%9A%AE/
//設定目前頁數(priviousPage)&總頁數(priviousPage)
let priviousPage = document.querySelector("#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div.shopee-sort-bar > div.shopee-mini-page-controller > div > span.shopee-mini-page-controller__current").textContent;
let currentPage = document.querySelector("#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div.shopee-sort-bar > div.shopee-mini-page-controller > div > span.shopee-mini-page-controller__total").textContent
let goodsArray=[]
while (priviousPage <= currentPage) {
    //滾動視窗載入資料
    await new Promise((r) => setTimeout(r, 10000));
    window.scroll({
        top: document.body.scrollHeight/4,
        behavior: "smooth",
    });
    await new Promise((r) => setTimeout(r, 5000));
    window.scroll({
        top: document.body.scrollHeight/2,
        behavior: "smooth",
    });
    await new Promise((r) => setTimeout(r, 10000));
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
    await new Promise((r) => setTimeout(r, 10000));
    // Get goods information
    let resultItems = document.querySelectorAll("#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div");
    resultItems.forEach((element) => {
        let item = {};
        item["title"] = element.querySelector(" a > div > div > div.KMyn8J > div.dpiR4u > div.FDn--\\+ > div").textContent;
        item["price"] = element.querySelector(" a > div > div > div.KMyn8J > div.hpDKMN > div").textContent;
        item["img"] = element.querySelector(" a > div > div > div:nth-child(1) > div > img").src;
        item["link"] = element.querySelector(" a ").href;
        goodsArray.push(item);
    });
    // Go to next page
    document.querySelector("#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div._4jsMAm > div > button.shopee-icon-button.shopee-icon-button--right").click();
    priviousPage++;
}
// Print items collected til this page.
console.log(goodsArray);