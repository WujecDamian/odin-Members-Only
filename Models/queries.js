const db = require("../db/db");

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT * FROM users");
  return rows;
};

const getUserByUsername = async (username) => {
  const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
};
const getUserById = async (id) => {
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
};

const createUser = async (fullName, username, password, passwordSalt) => {
  await db.query(
    "INSERT INTO users (full_name,username,password,password_salt) VALUES ($1,$2,$3,$4)",
    [fullName, username, password, passwordSalt],
  );
};

const addMembership = async (userId) => {
  await db.query("UPDATE users SET membership = TRUE WHERE id = $1", [userId]);
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  getUserById,
  createUser,
  addMembership,
};
