export function getDataFromLS() {
  const data = JSON.parse(localStorage.getItem("person-data"));
  if (data) {
    return data;
  } else {
    return [];
  }
}
