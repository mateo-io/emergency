import fs from 'fs';
import path from 'path';


const postesPath = path.join(__dirname, 'postes.json');
let allPostes = require(`.${postesPath}`);
let a ='hola';


const readPoste = (celular) => {
  return allPostes[celular]
}


const addPoste = (celular, poste) => {
  allPostes[celular] = poste;
  let postesPath = path.join( '.', __dirname, 'app', 'helpers', 'postes.json');
  return fs.writeFile( postesPath, JSON.stringify( allPostes ), "utf8", () => { console.log('Poste added. ') } );
}


const removePoste = (celular) => {
  delete allPostes[celular];
  let postesPath = path.join( '.', __dirname, 'app', 'helpers', 'postes.json');
  return fs.writeFile( postesPath, JSON.stringify( allPostes ), "utf8", () => { console.log('Poste deleted.', postesPath) } );
}



export { readPoste, addPoste, removePoste };
