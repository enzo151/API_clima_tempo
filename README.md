# Consulta de Clima Tempo
Este é um aplicativo simples para consultar o clima de uma cidade usando a API OpenWeather.

# Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

# Instalação
* Clone este repositório para o seu ambiente local.
* Na raiz do projeto, execute o comando npm install para instalar as dependências necessárias.

# Configuração da Chave da API
* Crie uma conta no OpenWeather para obter sua chave de API.
* No diretório raiz do projeto, crie um arquivo chamado config.json.
* Dentro do arquivo config.json, adicione o seguinte conteúdo:

{
    "apikey": "SuaChaveDeAPIAqui"
}
* Substitua "SuaChaveDeAPIAqui" pela sua chave de API obtida do OpenWeather.

# Uso
* Após a instalação e configuração da chave da API, execute o comando npm start para iniciar o servidor.
* Abra o navegador e vá para http://localhost:3000 para acessar o aplicativo.
* Insira o nome da cidade desejada no campo de texto e clique no botão "Consultar".
* Os resultados do clima para a cidade serão exibidos na página.

# Estrutura do Projeto
*  public: Contém arquivos estáticos, como imagens.
* config.json: Arquivo de configuração para armazenar a chave da API.
* server.js: O arquivo principal do servidor Node.js.
* style.css: Arquivo CSS para estilização do aplicativo.
* index.html: Página HTML principal do aplicativo.
README.md: Este arquivo README.
# Tecnologias Utilizadas
* Node.js
* Express.js
* Axios
* HTML
* CSS
