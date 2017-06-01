import allPostes from './postes.json'

const getPoste = (poste) => {
  if(allPostes[poste]==undefined){ return 'null' }
  try{
    return allPostes[poste[0]]
  } catch(e) {
    return 'Error poste'
  }
}


export default getPoste;
