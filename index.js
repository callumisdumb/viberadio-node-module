const axios = require("axios");

const fetchStats = async function () {
  try {
    const response = await axios.get("https://api.viberadio.net/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};

module.exports = { fetchStats };
