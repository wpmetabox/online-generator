import axios from 'axios';

export default axios.create({
    baseURL: 'https://metabox.io/wp-json/meta-box-online-generator'
});
