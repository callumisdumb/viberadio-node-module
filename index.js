const fetchStats = async function () {
  const response = await fetch("https://api.viberadio.net/stats").catch((e) => {
    throw Error(`Error fetching statistics: ${e}`);
  })

  return response.json()
};

export default { fetchStats };