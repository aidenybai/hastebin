import fetch from 'node-fetch';

const Hastebin = async (text, options = {}) => {
  if (!text) throw new Error('No input provided');

  if (typeof options === 'string') options = { url: 'https://hastebin.com', extension: options };

  const url = 'url' in options ? options.url : 'https://hastebin.com';
  const extension = 'extension' in options ? options.extension : 'js';

  const res = await fetch(`${url}/documents`, {
    method: 'POST',
    body: text,
    headers: { 'Content-Type': 'text/plain' },
  });

  if (!res.ok) throw new Error(res.statusText);

  const { key } = await res.json();

  return `${url}/${key}.${extension}`;
};

export default Hastebin;