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

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al querer obtener a los usuarios`)
  }
}

export const findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    
    if(!user) throw new Error(`No se encontro al usuario con id: ${id}`);
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al buscar al usuario por su id: ${error}`);
  }
}

export const deleteUserById = async (id) => {
  try {
    const userDeleted = await User.findByIdAndDelete(id);

    if(!userDeleted) throw new Error(`No se encontro al usuario con id: ${error}`);

    return userDeleted;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al borrar al usuario: ${error}`);
  }
}

export const updateUserById = async (id, data) => {
  try {
    const updatedUser =  await User.findByIdAndUpdate(
      { id: id },
      data,
      {
        new: true,
        runValidators: true
      }
    );

    if(!updatedUser) throw new Error(`No se encontro al usuario`);

    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al actualizar los datos ${error}`);
  }
}