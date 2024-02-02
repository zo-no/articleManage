/*
@Date		:2023/10/31 22:42:47
@Author		:zono
@Description:token管理工具
*/

const TOKENKEY = 'access_token'

function setToken (token) {
  return localStorage.setItem(TOKENKEY, token)
}

function getToken () {
  return localStorage.getItem(TOKENKEY)
}

function removeToken () {
  return localStorage.removeItem(TOKENKEY)
}

export {
  setToken,
  getToken,
  removeToken
}