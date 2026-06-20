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

const addNewMessage = async (title, message, userId) => {
  await db.query(
    "INSERT INTO messages (title,message,timestamp,user_id) VALUES ($1,$2,NOW(),$3)",
    [title, message, userId],
  );
};

const getAllMessages = async () => {
  const { rows } = await db.query(
    "SELECT title,message,full_name AS author FROM messages JOIN users ON messages.user_id = users.id",
  );
  return rows;
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  getUserById,
  createUser,
  addMembership,
  addNewMessage,
  getAllMessages,
};
