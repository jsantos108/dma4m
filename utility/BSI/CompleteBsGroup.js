export const CompleteBsGroup = (bsiGroup, names, asins, images, urls) => {
    names.map((n, i) => {
        bsiGroup[i+50] = {name: n};
    });
    asins.map((a, i) => {
        bsiGroup[i+50].asin = a;
    });
    images.map((img, i) => {
        bsiGroup[i+50].image = img;
    });
    urls.map((u, i) => {
        bsiGroup[i+50].url = u;
    });
};