import axiosBase from "../axios";

const token = sessionStorage.getItem("token");

export async function searchUserById(idUser) {
  try {
    const response = await axiosBase.get(`/api/user/findUserById/${idUser}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${sessionStorage.getItem("token")}`,
      },
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(data) {
  try {
    const response = await axiosBase.put(`/api/user/update`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: false,
    });
    localStorage.setItem("User_logged", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
