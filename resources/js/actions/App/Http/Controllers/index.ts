import HomeController from './HomeController'
import AboutController from './AboutController'
import ServicesController from './ServicesController'
import CaseStudyController from './CaseStudyController'
import CareerController from './CareerController'
import ContactController from './ContactController'
import Settings from './Settings'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    AboutController: Object.assign(AboutController, AboutController),
    ServicesController: Object.assign(ServicesController, ServicesController),
    CaseStudyController: Object.assign(CaseStudyController, CaseStudyController),
    CareerController: Object.assign(CareerController, CareerController),
    ContactController: Object.assign(ContactController, ContactController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers