import React from 'react'

import ThemeContext from '../contexts/ThemeContext'

import AsideContent from './aside-content'

import TypographyTest from './typography-test'
import BoxTest from './box-test'
import ButtonTest from './button-test'
import ContentTest from './content-test'
import DeleteTest from './delete-test'
// import FormTest from './form-test'
import IconTest from './icon-test'
// import ImagesTest from './images-test'
// import NotificationsTest from './notifications-test'
// import ProgressTest from './progress-test'
// import TableTest from './table-test'
// import TagTest from './tag-test'
// import BreadcrumbTest from './breadcrumb-test'
// import HeroTest from './hero-test'
// import NavbarMenuHero2Test from './navbarMenuHero2-test'
// import NavbarMenuHero3Test from './navbarMenuHero3-test'
// import NavbarMenuHero4Test from './navbarMenuHero4-test'
// import NavbarMenuHero5Test from './navbarMenuHero5-test'
// import NavbarMenuHero6Test from './navbarMenuHero6-test'
// import NavbarMenuHero7Test from './navbarMenuHero7-test'
// import NavbarMenuHero8Test from './navbarMenuHero8-test'
// import NavbarMenuHero9Test from './navbarMenuHero9-test'
// import NavbarMenuHero10Test from './navbarMenuHero10-test'
// import NavbarMenuHero11Test from './navbarMenuHero11-test'
// import CardTest from './card-test'
// import DropdownTest from './dropdown-test'
// import LevelTest from './level-test'
// import MediaTest from './media-test'
// import MenuTest from './menu-test'
// import MessageTest from './message-test'
// import ModalTest from './modal-test'
// import NavbarTest from './navbar-test'
// import PaginationTest from './pagination-test'
// import PanelTest from './panel-test'
// import TabsTest from './tabs-test'

import {combineStyles} from '../utils/common'

function TestContent(props){
  const {active_style, rotateStyle} = React.useContext(ThemeContext)

  return(
    <div className={active_style.columns}>

      <div className={combineStyles([active_style.column, active_style.is2])}>
        <AsideContent />
      </div>

      <div className={active_style.column}>
        <TypographyTest />
        <BoxTest />
        <ButtonTest />
        <ContentTest />
        <DeleteTest />
        {/* <FormTest /> */}
        <IconTest />
        {/* <ImagesTest /> */}
        {/* <NotificationsTest /> */}
        {/* <ProgressTest /> */}
        {/* <TableTest /> */}
        {/* <TagTest /> */}
        {/* <BreadcrumbTest /> */}
        {/* <HeroTest /> */}
        {/* <NavbarMenuHero2Test /> */}
        {/* <NavbarMenuHero3Test /> */}
        {/* <NavbarMenuHero4Test /> */}
        {/* <NavbarMenuHero5Test /> */}
        {/* <NavbarMenuHero6Test /> */}
        {/* <NavbarMenuHero7Test /> */}
        {/* <NavbarMenuHero8Test /> */}
        {/* <NavbarMenuHero9Test /> */}
        {/* <NavbarMenuHero10Test /> */}
        {/* <NavbarMenuHero11Test /> */}
        {/* <CardTest /> */}
        {/* <DropdownTest /> */}
        {/* <LevelTest /> */}
        {/* <MediaTest /> */}
        {/* <MenuTest /> */}
        {/* <MessageTest /> */}
        {/* <ModalTest /> */}
        {/* <NavbarTest /> */}
        {/* <PaginationTest /> */}
        {/* <PanelTest /> */}
        {/* <TabsTest /> */}


      </div>

    </div>
  )
}

export default TestContent