function toggleMode() {
  const html = document.documentElement
  const avatarImg = document.querySelector('#profile img')

  html.classList.toggle('light')

  if (html.classList.contains('light')) {
    avatarImg.setAttribute('src', './assets/avatar-light.png')
    avatarImg.setAttribute(
      'alt',
      'Foto de João Guilherme de frente para o espelho, utilizando camiseta preta, casaco cinza, corrente dourada e um boné de cor preta virado para trás'
    )
  } else {
    avatarImg.setAttribute('src', './assets/avatar.png')
    avatarImg.setAttribute(
      'alt',
      'Foto de João Guilherme sorrindo, tirando uma foto de frente ao espelho de um elevador, utilizando uma jaqueta preta'
    )
  }
}
