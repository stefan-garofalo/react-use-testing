export const getData = async param => {
  const res = await fetch("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify(param),
    cache: "force-cache",
  });
  return res.json();
};
