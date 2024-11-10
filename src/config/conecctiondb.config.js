import mongoose from "mongoose";
import 'dotenv/config';

export const connectiondb = async () => {
  const URI = process.env.MONGODB_URI;

  if(!URI) throw new Error('No se ha definido una URI para la base de datos');

  try {
    await mongoose.connect(URI);
    console.log('Se conecto la base de datos');
  } catch (error) {
    console.error(error);
    throw new Error('Error al conectar con la base de datos');
  }
}