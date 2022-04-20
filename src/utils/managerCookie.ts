import Cookies from 'js-cookie'

export const managerCookie = (logged: any) => {
  if (logged) {
    Cookies.set('admin-template', logged, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template')
  }
}
