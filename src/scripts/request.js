import { Messenger } from '../classes/Messenger.js'
import { Autor } from '../classes/Autor.js'
import { Skill } from '../classes/Skill.js'
import { Project } from '../classes/Project.js'


export const getMessengersData = async () => {
  const messengerParentSelectors = ['.header__messenger_autor', '.contact__messenger_autor']

  const response = await fetch('./src/JSON/messengers.json')
  const messengersData = await response.json()


  messengerParentSelectors.forEach(parent => {
    messengersData.forEach(messenger => {
      messenger.parentSelector = parent
      new Messenger(messenger)
    })
  })
}



export const getAutorInfo = async () => {
  const request = await fetch('https://api.github.com/users/Kirill-Leonidovich')
  const response = await request.json()

  const info = {
    name: response.name,
    bio: response.bio,
    location: response.location,
    photo: response.avatar_url
  }

  new Autor(info)
}


export const getSkillsData = async () => {
  const response = await fetch('./src/JSON/skills.json')
  const skillsData = await response.json()

  skillsData.forEach(skill => new Skill(skill))
}


export const getAllRepository = async () => {
  const request = await fetch('https://api.github.com/users/Kirill-Leonidovich/repos') // насзания всех repository
  const response = await request.json()

  response
    .filter(i => !(i.name.startsWith('kirill-leonidovich') || i.name.startsWith('javascript-cheat-sheet') || i.name.startsWith('extended-select')))
    .forEach(i => new Project({
      name: i.name,
      description: i.description
    }))
}