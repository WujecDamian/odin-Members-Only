const db = require("../db/db");

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT * FROM users");
  return rows;
};

const createUser = async (fullName, username, password, passwordSalt) => {
  await db.query(
    "INSERT INTO users (full_name,username,password,password_salt) VALUES ($1,$2,$3,$4)",
    [fullName, username, password, passwordSalt],
  );
};

module.exports = {
  getAllUsers,
  createUser,
};
