// AJAX
export default async function handleGetListData(url, page) {
  if (page) url += `?page=${page}`;

  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  console.log('data', data);

  return data;
}
