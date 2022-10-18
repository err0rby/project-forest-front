const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3013' // адрес сервера на локалке
} else {
  serverUrl = 'https://forest-team-back.onrender.com'; // адрес сервера после выгрузки
}