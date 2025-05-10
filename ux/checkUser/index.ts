export const checkUser = () => {
  const local = localStorage.getItem('user')
  const user = JSON.parse(local as any)

  return user ? user : {
    text: 'Мы не нашли ваш аккаунт на этом компьютере! Пожалуйста зарегистрируйтесь, введя  форму ниже на этом сайте.',
    code: 404
  }
}