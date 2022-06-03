const express = require("express");
// const fs = require("fs/promises");
const routerMentores = require("./routers/mentores")

const server = express();

// middleware para convertir request a JSON
server.use(express.json());

server.use("/mentores",routerMentores)

server.get("/", (request, response) => {
  response.send("Hola Mentores!");
});

server.get("/mentores", async (req, res) => {
  const mentores = await readMentores(); // accedemos solo a los koders que estan en un arreglo

  const edad = Number(req.query.edad)
  const count = Number(req.query.count)

  let respuesta = mentores
  console.log("Respuesta Inicial:",respuesta)
  if ( !Number.isNaN(edad)){
    console.log("La edad de l parametro es:",edad)
    respuesta = mentores.filter((mentor)=>mentor.edad ===edad);
    console.log("La nueva respuesta es:",respuesta)
  }
  if(!Number.isNaN(count)){
    console.log("El parametro count es:", count)
    respuesta = respuesta.slice(0,count)
    console.log("La nueva respuesta es:",respuesta)
  }
  res.json(respuesta);
});

server.post("/mentores", async (req, res) => {
  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const mentor = req.body;

  // Cargar Koders
  const mentores = await readMentores(); // accedemos solo a los koders que estan en un arreglo

  // Agregar un nuevo Koder
  mentores.push(mentor);

  // Guardar cambios
  await writeMentores({ mentores });

  // Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(mentores);
});

server.patch("/mentores/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const newMentor = req.body;

  // Cargar Koders
  const mentores = await readMentores();

  // TODO: Buscar y actualizar al Koder cuyo koder.nombre sea igual a nombre
  for (let i = 0; i < mentores.length; i++) {
    const oldMentor = mentores[i];

    if (oldMentor.nombre === nombre) {
      oldMentor.edad = newMentor.edad;
      oldMentor.genero = newMentor.genero;
    }
  }

  // Guardar cambios, envolviendo el arreglo koders en un objeto
  await writeMentores({ mentores });

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(mentores);
});

server.delete("/mentores/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Cargar Koders
  const mentores = await readMentores();

  // Voy a eliminar al Koder que se llame como la constante nombre
  const newMentores = mentores.filter((mentor) => mentor.nombre !== nombre);
  console.log(newMentores);

  const newObject = {
    mentores: newMentores,
  };

  // Guardar cambios
  await writeMentores(newObject);

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(newMentores);
});

server.listen(8001, () => {
    console.log("Servidor ejecutandose");
  });
  
  async function readMentores() {
    const archivo = await fs.readFile("mentores.json", "utf8"); // el archivo es un String
    const objeto = JSON.parse(archivo); // convierte un string a un objeto
    const mentores = objeto.menotres; // accedemos solo a los koders que estan en un arreglo
  
    return mentores;
  }
  
  async function writeMentores(newObject) {
    const nuevoArchivo = JSON.stringify(newObject, null, 2); // Convertimos el objeto a un String nuevo
    await fs.writeFile("mentores.json", nuevoArchivo, "utf8");
  }