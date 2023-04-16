const {
  create, remove, is_existed, execute_raw_get_newspaper_favourite_by_category,
  execute_raw_get_newspapers, execute_raw_get_category,
} = require('../service/favourite_service');
const { DEFAULT_STATUS, DEFAULT_ERROR_STATUS, DEFAULT_ERROR } = require('../constant/constant');
const { response } = require('express');
const { prisma } = require('../prisma/database');

exports.create_favourite = async (request, response) => {
  try {
    const { idUser, idNewspaper } = request.body;
    const data = await create(idUser, idNewspaper);
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};

exports.delete_favourite = async (request, response) => {
  try {
    const { idUser, idNewspaper } = request.query;
    const data = await remove(parseInt(idUser),parseInt(idNewspaper));
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};

exports.is_favourite = async (request, response) => {
  try {
    const { idUser, idNewspaper } = request.query;
    const data = await is_existed(parseInt(idUser), parseInt(idNewspaper));
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};

exports.get_newspapers_favourite = async (request, response) => {
  try {
    const { idUser } = request.params;
    const data = await execute_raw_get_newspapers(parseInt(idUser));
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};

exports.get_category_favourite = async (request, response) => {
  try {
    const { idUser } = request.params;
    const data = await execute_raw_get_category(parseInt(idUser));
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};

exports.get_newspapers_by_category = async (request, response) => {
  try {
    const { idUser, nameCategory } = request.query;
    const data = await execute_raw_get_newspaper_favourite_by_category(parseInt(idUser), nameCategory);
    response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error: error.message,
    });
  }
};