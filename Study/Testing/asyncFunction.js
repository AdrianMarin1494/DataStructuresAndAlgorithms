function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data");
        }, 100);
    });
}

module.exports = fetchData;