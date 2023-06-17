// * Iniciar la aplicación
import { getCharacters } from "./api.js";

(async () => {
    const data = await getCharacters();
    console.log(data);
  }
)();