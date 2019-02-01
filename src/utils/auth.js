import Cookies from 'js-cookie'

const TokenKey = 'USER_TOKEN'
const IdentityKey = 'USER_IDENTITY'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getIdentity() {
  return Cookies.get(IdentityKey)
}

export function setIdentity(identity) {
  return Cookies.set(IdentityKey, identity)
}

export function removeIdentity() {
  return Cookies.remove(IdentityKey)
}