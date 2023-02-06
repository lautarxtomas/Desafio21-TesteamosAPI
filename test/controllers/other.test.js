const axios = require('axios');

// JEST
test('[GET] test/info/ returns data correctly', async() => {
    const response = await axiosGet('http://localhost:8080/test/info');
    expect(typeof response.platform).toBe('string')
    expect(response.version).toMatch(/^v\d+\.\d+\.\d+/)
    expect(typeof response.title).toBe('string')
    expect(typeof response.execPath).toBe('string')
    expect(typeof response.processId).toBe('number')
    expect(typeof response.rss).toBe('number')
    expect(typeof response.numberOfProcessors).toBe('number')
});


const axiosGet = async (url) => {
    const response = await axios.get(url);
    return response.data;
};
