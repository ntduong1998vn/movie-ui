import axios from "../helpers/axios.instance";

const changePassword = async (userId, form) => {
  return await axios.put("/api/user/changePassword/" + userId, form);
};

const updateBasicInfo = async (userId, form) => {
  return await axios.put("/api/user/update-basic-info/" + userId,form);
};

const forgetPassword = async (email) => {
  return await axios.post(`/api/user/reset-password/?email=${email}`)
}

const updateVip = async () => {
  return await axios.get(`/api/user/update-vip`)
}
export default { changePassword, updateBasicInfo,forgetPassword, updateVip };
