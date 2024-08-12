import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollSmoother } from 'gsap/all'


import home from './home'
import offline from './offline'
import ecommerce from './ecommerce'
import rp from './rp'
import partnerships from './partnerships'
import careers from './careers'
import contact from './contact'
import startups from './startups'
import investor from './investor'
import creative from './creative'
import about from './about'
import freelancing from './freelancing'
import agency from './agency'
import advisory from './advisory'
import recruiting from './recruiting'
import talent from './talent'
import other from './other'
import blog from './blog'
import blogtemplate from './blogtemplate'
import study from './study'
import studytemplate from './studytemplate'
import author from './author'
import webinars from './webinars'
import confirmation from './confirmation'
import webinartemplate from './webinartemplate'
import videotemplate from './videotemplate'

let isHome = document.querySelector('body').classList.contains('body--home')
if(isHome){
  home()
}

let isOffline = document.querySelector('body').classList.contains('body--offline')
if(isOffline){
  offline()
}

let isPartnerships = document.querySelector('body').classList.contains('body--partnerships')
if(isPartnerships){
  partnerships()
}

let isEcommerce = document.querySelector('body').classList.contains('body--ecommerce')
if(isEcommerce){
  ecommerce()
}

let isRp = document.querySelector('body').classList.contains('body--rp')
if(isRp){
  rp()
}

let isCareers = document.querySelector('body').classList.contains('body--careers')
if(isCareers){
  careers()
}

let isStartups = document.querySelector('body').classList.contains('body--startups')
if(isStartups){
  startups()
}

let isInvestor = document.querySelector('body').classList.contains('body--investor')
if(isInvestor){
  investor()
}

let isOther = document.querySelector('body').classList.contains('body--other')
if(isOther){
  other()
}

let isCreative = document.querySelector('body').classList.contains('body--creative')
if(isCreative){
  creative()
}

let isAbout = document.querySelector('body').classList.contains('body--about')
if(isAbout){
  about()
}

let isFreelancing = document.querySelector('body').classList.contains('body--freelancing')
if(isFreelancing){
  freelancing()
}

let isAgency = document.querySelector('body').classList.contains('body--agency')
if(isAgency){
  agency()
}

let isAdvisory = document.querySelector('body').classList.contains('body--advisory')
if(isAdvisory){
  advisory()
}

let isRecruiting = document.querySelector('body').classList.contains('body--recruiting')
if(isRecruiting){
  recruiting()
}

let isTalent = document.querySelector('body').classList.contains('body--talent')
if(isTalent){
  talent()
}

let isBlog = document.querySelector('body').classList.contains('body--blog')
if(isBlog){
  blog()
}

let isBlogtemplate = document.querySelector('body').classList.contains('body--blogtemplate')
if(isBlogtemplate){
  blogtemplate()
}

let isStudy = document.querySelector('body').classList.contains('body--study')
if(isStudy){
  study()
}

let isStudytemplate = document.querySelector('body').classList.contains('body--studytemplate')
if(isStudytemplate){
  studytemplate()
}

let isContact = document.querySelector('body').classList.contains('body--contact')
if(isContact){
  contact()
}

let isAuthor = document.querySelector('body').classList.contains('body--authors')
if(isAuthor){
  author()
}

let isWebinars = document.querySelector('body').classList.contains('body--webinars')
if(isWebinars){
  webinars()
}

let isWebinartemplate = document.querySelector('body').classList.contains('body--webinartemplate')
if(isWebinartemplate){
  webinartemplate()
}

let isConfirmation = document.querySelector('body').classList.contains('body--confirmation')
if(isConfirmation){
  confirmation()
}

let isVideotemplate = document.querySelector('body').classList.contains('body--videotemplate')
if(isVideotemplate){
  videotemplate()
}