import { deleteUserById, getUsers, saveUser, updateUserById } from "../services/user.service";

export const createUserController = async (req, res, next) => {
  try {
    const user = req.body;

    const userCreated = await saveUser(user);

    res.status(201).json({ message: `Se creo al usuario`, data: userCreated });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export const getUsersController = async (req, res, next) => {
  try {
    const users = getUsers();

    res.status(200).json({ data: users});
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export const updateUserController = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;

    const updatedUser = await updateUserById(id);

    res.status(200).json({ message: 'Se actualizaron los datos del usuario', data: updatedUser });
  } catch (error) {
    console.error(error);
    (error.message === `No se encontro al usuario`) 
    ? res.status(404).json({ message: error.message })
    : res.status(500).json({ message: `No se pudo actualizar los datos del usuario` });
  }
}

export const deleteUserController = async (req, res)=> {
  try {
    const { id } = req.body;

    await deleteUserById(id);

    res.status(200).json({ message: 'Se elimino al usuario' });
  } catch (error) {
    console.error(error);
    (error.message === `No se encontro al usuario`) 
    ? res.status(404).json({ message: error.message })
    : res.status(500).json({ message: 'No se pudo eliminar al usuario' });
  }
}