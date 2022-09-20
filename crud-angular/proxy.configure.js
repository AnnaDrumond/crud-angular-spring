
//Lidar com erro CORS devido a termos o front(4200) em local diferente do back(8080)
const PROXY_CONFIGURE = [
  {
    //chamada para o spring - backend
    //sempre que eu fizer um /api o angular vai me redirecionar
    context: ["/api"],
    target: "http://localhost:8080/",
    //false porque nãoe stou usando https, apenas http
    // ou seja, não estou nível de segurança
    secure: false,
    //
    loglevel: "debug",
  },
];

//exportar a constante
module.exports = PROXY_CONFIGURE;

// No package.json adicionar uma flag em "scripts" para ficar:
/*"start": "ng serve --proxy-config proxy.configure.js",
proxy.configure.js é o nome do ficheiro onde tenho a constante, ou seja, deste ficheiro

Ou seja, sempre que fizer o "ng serve" deve ser usado o ficheiro com a configuração

Para correr a aplicacao deve usar "npm run start" para garantir que vai correr as configurações*/
