import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./src/.env" });

export async function conn(): Promise<void> {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y70ox7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectado ao banco");
  } catch (error) {
    throw new Error(`Erro ao conectar ao DB: ${error}`);
  }
}
