import axios from "../helpers/axios.instance";

const changePassword = async (userId, form) => {
  return await axios.put("/api/user/changePassword/" + userId, form);
};

const updateBasicInfo = async (userId, form) => {
  return await axios.put("/api/user/update-basic-info/" + userId,form);
};
export default { changePassword, updateBasicInfo };
