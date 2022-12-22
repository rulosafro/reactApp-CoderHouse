import dataStock from '../../data/MOCK_DATA.json'

const pedirDatos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(dataStock)
    }, 2000);
  }
  )
}

export default pedirDatos