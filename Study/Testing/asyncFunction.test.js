const fetchData = require("./asyncFunction");

test("fetchData function should resolve with 'data'", async() => {
    const result = await fetchData();
    expect(result).toBe("data");
})