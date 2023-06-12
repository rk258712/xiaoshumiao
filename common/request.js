// request.js
// const baseUrl = 'http://www.xsmyy.cn'
const imageBaseUrl = 'http://www.xsmyy.cn'
// const baseUrl = 'http://192.168.31.63/dev-api'
const baseUrl = 'http://47.113.188.65:8080'
// const baseUrl = 'http://localhost:8082/chemApp'  
// const baseUrl = '/chemApp'  
// const baseUrl = '' 
import {
	getToken,
	removeToken
} from '/common/auth.js'
import {
		getUser,
		removeUser
	} from '/common/user.js'

const request = (options = {}) => {
	
	var header = options.header || {}
	header['content-type'] = 'application/json'
	// header['lang'] = uni.getLocale()
	// 判断本地是否存在token，如果存在则带上请求头
	let token = getToken()
	if (token) {
			header['Authorization'] = "Bearer "+ `${token}`
	}
	options.header = header
	
	var data  = options.data || {}
	let pid = uni.getStorageSync('BKType') || 1
	if (pid) {
		data['categoryId'] = pid
		data['pid'] = pid
	}
	let user = getUser()
	if (user){
		data['uid'] = user.id
	}
	options.data = data
	
	return new Promise((resolve, reject) => {
		let url = baseUrl + (options.url || '') + '?isMobile=isMobile'
		uni.request({
			url: url,
			method: options.type || 'GET',
			data: options.data || {},
			header: options.header || {},
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			if (response.data.code !== 200) {
				console.log('请求失败：'+url)
				if (response.data.code == 401){
					removeToken()
					removeUser()
				}
				reject(response.data)
			} else {
				console.log('请求成功：'+url)
				console.log(response.data)
				resolve(response.data);
			}
		}).catch(error => {
			console.log('请求失败：'+url)
			console.log(error)
			reject(error.err)
		})
	});
}
export const get = (url, data, options = {}) => {
	options.type = 'get';
	options.data = data;
	options.url = url;
	return request(options)
}
export const post = (url, data, options = {}) => {
	options.type = 'post';
	options.data = data;
	options.url = url;
	return request(options)
}
export const del = (url, data, options = {}) => {
	options.type = 'delete';
	options.data = data;
	options.url = url;
	return request(options)
}
export const put = (url, data, options = {}) => {
	options.type = 'put';
	options.data = data;
	options.url = url;
	return request(options)
}
export default {
	request,
	get,
	post,
	del,
	put,
	baseUrl,
	imageBaseUrl
}
