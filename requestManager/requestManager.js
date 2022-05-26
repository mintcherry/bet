import axios from 'axios';
import config from '/nuxt.config.js';

const requestManager = axios.create(config.axios);

export default requestManager;
