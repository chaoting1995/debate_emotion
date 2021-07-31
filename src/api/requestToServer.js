export default async function requestToServer(
  url,
  page,
  method = 'GET',
  body = '', //bodyData 必需為 json 字串
  debug = false, // true => 開啟debug模式
  verify = () => true,
  successCallback = () => {},
  failCallback = () => {}
) {
  // 設定檔頭，資料類型(寫死為json格式了)
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  // 若有頁碼，添加到query string
  if (page) url += `?page=${page}`;
  // GET方法無body，先設定出樣版物件
  const requestTemplate = new Request(url, {
    method,
    headers,
  });

  // 設定請求
  let request = requestTemplate;
  // 如果不是GET，再加上body
  if (method !== 'GET') request = new Request(requestTemplate, { body });

  try {
    // 查看request
    if (debug) console.log('request', request);
    // 送出request
    const response = await fetch(request);

    // 查看response
    if (debug) console.log('response', response);
    // 解析response
    const data = await response.json();

    // 查看回應狀況
    if (debug) console.log('response.ok', response.ok);

    // 查看得到的資料
    if (debug) console.log('data', data);
    // 回傳資料

    //
    if (verify(data) && response.ok) {
      successCallback(data);
    } else {
      failCallback(data);
    }

    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}
