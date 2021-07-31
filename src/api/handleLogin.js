export default async function handleLogin(body) {
  // 設定檔頭，資料類型(寫死為json格式)
  const url = `${process.env.REACT_APP_DEV_URL}/api/users/login`;
  const req = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  // AJAX
  const res = await fetch(req);
  const obj = await res.json();

  // console.log('obj', obj);
  return obj;
}
