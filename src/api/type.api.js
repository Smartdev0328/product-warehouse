const { default: axios } = require("axios")
const { API_URL } = require("../config/constants")

const getAllCategories = async () => {
  const result = await axios.get(API_URL + "/api/type/all");
  console.log(result);
  return result.data;
}

export {
  getAllCategories
}