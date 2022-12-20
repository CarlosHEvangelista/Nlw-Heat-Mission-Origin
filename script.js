/* Forma de guardar dados que estão relacionados, dado estruturado */
const user = {
  name: 'Carlos Henrique Evangelista',
  phone: 123456789,
  accept: true
}

/* Forma de usar uma informação dentro de um objeto, não exclusido para o alert
      alert(user.name) */

const socialMedia = {
  github: 'CarlosHEvangelista',
  youtube: 'jakelinygraciely',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMedia() {
  for (li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubUserInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  /* Usando uma variavel para ficar mais fácil de fazer alterações e o codigo ficar mais bonito */

  /* then == uma promise, caso dê certo ele irá fazer alguma coisa */

  /* arrow function é uma maneira mais facil de criar funções que não irá precisar executar depois, de um lado os argumentos e de outro a função */

  /* Response é apenas uma variavel */

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      Bio.textContent = data.bio
      UserLink.href = data.html_url
      UserLink.children[1].textContent = data.login
      Avatar.children[1].src = data.avatar_url
    })
}

getGitHubUserInfos()
