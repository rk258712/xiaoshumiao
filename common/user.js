const UserKey = 'user';

// 认证令牌
export function getUser() {
	return uni.getStorageSync(UserKey)
}

export function setUser(user) {
	return uni.setStorageSync(UserKey, user)
}

export function removeUser() {
	return uni.removeStorageSync(UserKey)
}

