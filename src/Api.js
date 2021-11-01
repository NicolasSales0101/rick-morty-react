import axios from "axios";

const api = {
    getPersonagemByName: async (name) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        console.log('-----> Dados gerais: ')
        console.log(response.data)
        console.log('-----> Resultados específicos de acordo com a palavra/nome pesquisado')
        console.log(response.data.results)
        return response;
    }
}

export default api;