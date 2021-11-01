import {} from './src/scripts/UI/showText.js'
import { navigation, goAnimationTo } from './src/scripts/UI/smoothNavigation.js '
import { getMessengersData, getAutorInfo, getSkillsData, getAllRepository } from './src/scripts/request.js'

getMessengersData()
getAutorInfo()
getSkillsData()
getAllRepository()

navigation.addEventListener('click', goAnimationTo)