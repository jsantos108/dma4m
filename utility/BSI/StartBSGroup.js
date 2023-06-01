export const StartBsGroup = (bsiGroup, names, asins, images, urls) => {
    names.map((n, i) => {
        bsiGroup[i] = {name: n};
    });
    asins.map((a, i) => {
        bsiGroup[i].asin = a;
    });
    images.map((img, i) => {
        bsiGroup[i].image = img;
    });
    urls.map((u, i) => {
        bsiGroup[i].url = u;
    });
};