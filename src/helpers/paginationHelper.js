function getMaxPage(length, perPage = 12) {
    return Math.ceil(length / perPage);
}
export function reachedMaxPage(pageID, length) {
    return pageID > getMaxPage(length);
}
