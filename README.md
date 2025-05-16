# Aplicativo de Clima com Geolocalização por IP

Uma aplicação web front-end que exibe as condições meteorológicas atuais e a previsão para os próximos dias, detectando automaticamente a localização do usuário via IP e utilizando a API HG Brasil Weather.

## Sobre o Projeto

Este aplicativo de clima foi desenvolvido por Gabriel Behling e Tyxiel utilizando HTML, CSS e JavaScript. Ele oferece uma interface limpa para visualizar informações do tempo, como temperatura, descrição, umidade, velocidade do vento, precipitação, horário do pôr do sol, além de uma previsão para os próximos 6 dias. A localização do usuário é obtida automaticamente para fornecer dados relevantes sem a necessidade de entrada manual.

## Funcionalidades

* Detecção automática da cidade do usuário baseada no endereço IP.
* Exibição de dados do tempo atual:
    * Ícone do tempo
    * Descrição do tempo
    * Temperatura em Celsius
    * Nome da cidade
    * Umidade
    * Volume de chuva (precipitação)
    * Horário do pôr do sol
    * Velocidade do vento
* Previsão do tempo para os próximos 6 dias, incluindo:
    * Dia da semana
    * Ícone do tempo
    * Temperaturas máxima e mínima
    * Descrição do tempo
* Interface de usuário amigável e estilizada.

## Tecnologias Utilizadas

* **HTML5**: Estrutura da página.
* **CSS3**: Estilização e layout.
* **JavaScript (ES6+)**: Lógica da aplicação, chamadas às APIs (`Workspace`), manipulação do DOM.
* **APIs Externas:**
    * [HG Brasil Weather API](https://hgbrasil.com/status/weather): Para obter os dados meteorológicos.
    * [ipify API](https://www.ipify.org/): Para obter o endereço IP público do usuário.
    * [ip-api.com](https://ip-api.com/): Para obter informações de geolocalização (cidade, região) a partir do IP.
* **Boxicons**: Para os ícones utilizados na interface. (https://boxicons.com/)

## Como Usar/Testar

1.  **Obtenha uma API Key da HG Brasil:**
    * Você precisará de uma chave de API da [HG Brasil Weather](https://hgbrasil.com/status/weather) para que a aplicação funcione.
2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/gabrielBehling/Weather-App.git](https://github.com/gabrielBehling/Weather-App.git) # ou o repositório correto
    cd Weather-App
    ```
3.  **Configure a API Key:**
    * No arquivo `script.js`, localize a variável `weatherApiKey`.
    * Substitua o valor existente pela sua chave da API HG Brasil:
      ```javascript
      const weatherApiKey = "SUA_CHAVE_API_HG_BRASIL";
      ```
4.  **Abra no Navegador:**
    * Abra o arquivo `index.html` no seu navegador de preferência.
    * Permita que o navegador acesse sua localização (se solicitado, embora este use IP) ou certifique-se de que não há bloqueios de rede para as APIs.

**Demonstração Online:**
Você pode ver uma demonstração do projeto em: [gabrielbehling.github.io/Weather-App/](https://gabrielbehling.github.io/Weather-App/)
*(Nota: A versão demo pode usar uma chave de API limitada ou de testes.)*

## Créditos

* Frontend: Tyxiel
* Backend (lógica de consumo de API): Gabriel Behling
* Imagem de Fundo: Tim Patch no Unsplash
