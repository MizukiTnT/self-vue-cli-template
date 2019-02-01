const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  mobile: state => state.user.mobile,
  identity: state => state.user.identity,
  info: state => state.user.userInfo,
  province: state => state.base.province
}
export default getters
