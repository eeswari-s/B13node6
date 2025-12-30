import  User from "../Models/UserModel.js"
/* CREATE USER */
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* GET ALL USERS */
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

/* GET USER BY ID */
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

/* UPDATE USER */
export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
};

/* DELETE USER */
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};