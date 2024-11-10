import { User } from "../models/user.model";

export const saveUser = async (user) => {
  try {
    const newUser = new User(user);
    return await newUser.save();
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al crear al usuario: ${error}`);
  }
}