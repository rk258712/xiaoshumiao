
import {get} from '/common/request.js'

const codes = ["YINFUHUAFA","WUXIANPU","YINFU","YINFUYINGAO"]

// 音符音高
export function getData(key) {
	return uni.getStorageSync(key)
}

export function setData(key,data) {
	return uni.setStorageSync(key, data)
}

export function loadKeyboardData(){
	for (let code of codes) {
		get('/api/TopicWxpPic/picList', {
			code:code
		}).then(res => {
			console.log(res.rows)
			setData(code,res.rows)
		}, function(err) {
			console.log(err)
		})
	}
}
