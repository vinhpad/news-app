export const BASE_URL = 'https://newsapi.org/v2';
export const API_KEY = '&apiKey=23e0aad1edf54ab5bcc144aa44d92220';
export const API_URL = 'http://10.0.2.2:3001';

import axios from 'axios';

exports.getCategory = async () => {
  return await axios.get(`${API_URL}/category`);
};

exports.getNews = async (category) => {
  return await axios.get(`${API_URL}/newspaper/${category}`);
};

exports.postFavourite = async (params) => {
  return await axios.post(`${API_URL}/favourite/`, params);
};

exports.deleteFavourite = async (params) => {
  return await axios.delete(`${API_URL}/favourite/`, { params: params });
};

exports.getFavouriteTags = async (idUser) => {
  return await axios.get(`${API_URL}/favourite/category/${idUser}`);
};

exports.getFavouriteNewsByTag = async (params) => {
  return await axios.get(`${API_URL}/favourite/newspaper`, {
    params: params,
  });
};

exports.getFavouriteCheck = async (params) => {
  return await axios.get(`${API_URL}/favourite`, {
    params: params,
  });
};

exports.postUserInfo = async (params) => {
  return await axios.post(`${API_URL}/user`, {
    params: params
  });
}

exports.handleLogin = async (params) => {
  return await axios.post(`${API_URL}/user/login`, params)
}

exports.updateProfile = async (params) => {
  return await axios.patch(`${API_URL}/user/update`, params)
}

exports.changePassword = async (params) => {
  return await axios.patch(`${API_URL}/user/changePass`, params)
}
