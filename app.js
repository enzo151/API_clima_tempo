const express = require('express');
// Importando o framework Express, que facilita o desenvolvimento de aplicativos web com Node.js

const axios = require('axios');
// Importando o Axios, uma biblioteca para fazer requisições HTTP

const path = require('path');
// Importando o módulo 'path', que fornece utilitários para trabalhar com caminhos de arquivos e diretórios

const cors = require('cors');
// Importando o módulo 'cors', que é utilizado para habilitar o CORS (Cross-Origin Resource Sharing) em express.js

const config = require('./config.json');
// Importando o arquivo de configuração que contém a chave da API (não é recomendado versionar a chave no GitHub)
const apikey = config.apikey;
// Extraindo a chave da API do arquivo de configuração

const app = express();
// Criando uma instância do aplicativo Express
app.listen(3000);
// Configurando o aplicativo para escutar na porta 3000
app.use(cors());
// Habilitando o CORS no aplicativo
app.use(express.json());
// Configurando o aplicativo para usar o middleware que permite o uso de JSON nos corpos das requisições
app.use(express.static(path.join(__dirname, 'public')));
// Configurando o aplicativo para servir arquivos estáticos da pasta 'public'

const traducaoClima = {
    // Definindo um objeto de tradução para os diferentes tipos de clima
}

app.get('/climatempo/:cidade', async (req, res) => {
    // Definindo uma rota para lidar com requisições de consulta de clima
    const city = req.params.cidade;
    // Obtendo o nome da cidade da URL

    try {
        // Tentando fazer uma requisição para a API OpenWeather
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        // Fazendo uma requisição GET para a API OpenWeather

        if (response.status === 200) {
            // Se a requisição for bem-sucedida (status 200)
            const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description;
            // Traduzindo a descrição do clima para o idioma desejado, se houver uma tradução disponível

            const weatherData = {
                // Criando um objeto com os dados meteorológicos a serem enviados como resposta
            }

            res.send(weatherData);
            // Enviando os dados meteorológicos como resposta da requisição
        } else {
            res.status(response.status).send({ erro: 'Erro ao obter dados meteorológicos' });
            // Se a requisição não for bem-sucedida, envia um erro com o status correspondente
        }
    } catch (error) {
        res.status(500).send({ erro: 'Erro ao obter dados meteorológicos', error });
        // Se ocorrer um erro durante a requisição, envia um erro interno do servidor (status 500) com informações adicionais
    }
});
