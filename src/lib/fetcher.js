import https from 'https'

const httpsAgent = new https.Agent({ rejectUnauthorized: false })

export const fetcher = (url, options = {}) => {
    const {onCallback, ...otherOptions} = options;
    return fetch(url, {agent: httpsAgent, ...otherOptions})
    .then((response) => response.json())
    .then(onCallback);
}