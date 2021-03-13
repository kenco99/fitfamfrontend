import axios from 'axios';

const dummy = () => {
    let promise = new Promise(function (resolve, reject) {
        axios.get('login')
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error.response);
            });
    });
    return promise;
}

export default dummy