import fs from 'fs';
import path from 'path';


let allPostes = require('/postes/postes.json');
const postesPath = '/postes/postes.json';

const getAllPostes = () => {
  return allPostes;
}

const readPoste = (celular) => {
  if (allPostes[celular]) {
    return allPostes[celular]
  }
}


const addPoste = (celular, poste) => {
  allPostes[celular] = poste;
  //let postesPath = path.join( '.', __dirname, 'app', 'helpers', 'postes.json');
  return fs.writeFile( postesPath, JSON.stringify( allPostes ), "utf8", () => { console.log('Poste added. ') } );
}


const removePoste = (celular) => {
  delete allPostes[celular];
  //let postesPath = path.join( '.', __dirname, 'app', 'helpers', 'postes.json');
  return fs.writeFile( postesPath, JSON.stringify( allPostes ), "utf8", () => { console.log('Poste deleted.', postesPath) } );
}



export { readPoste, addPoste, removePoste, getAllPostes };
