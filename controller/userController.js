import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//update a user:

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//delete a user:
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById({ _id: id });
    if (!userExist) {
      return res.status(404).json({ error: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//tesing
export const fetch = async (req, res) => {
  try {
    return res.json("Hello world");
  } catch (error) {
    res.status(500).json({ erro: "Internal server error" });
  }
};
