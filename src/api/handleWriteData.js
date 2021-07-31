export default async function handleWriteData(url, body, method = 'POST') {
  let req = {};
  if (method === 'POST' || method === 'PUT') {
    req = new Request(url, {
      method: method,
      // headers:headers,
      body: body && new FormData(body),
    });
  } else {
    req = new Request(url, {
      method: method,
    });
  }

  // AJAX
  const res = await fetch(req);
  const obj = await res.json();
  // console.log('obj', obj);

  return obj;
}
