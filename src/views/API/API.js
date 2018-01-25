import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.10.196:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class API {


	// get(url, params) {
	// 	let data = Object.assign(params, this.getToken())
	// 	return axios.get(url, { params: data });
	// }
	get(url, params) {
		return axios.get(url, { params: params });
	}

	post(url, params) {
		return axios.post(url, params);
	}

	put(url, params) {
		return axios.put(url, params);
	}

	patch(url, params) {
		return axios.patch(url, params);
	}

}
export default API;
