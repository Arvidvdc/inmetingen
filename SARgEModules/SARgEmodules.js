module.exports = {
    sortType : (collection, type) => {
        let sortType = [];
        collection.forEach(record => {
            if (record.categorie===type) {
                sortType.push(record);
            }
        });
        return sortType;
    }
}