import React from 'react'

import ThemeContext from '../contexts/ThemeContext'

import AsideContent from './aside-content'

import BoxTest from './box-test'
import BreadcrumbTest from './breadcrumb-test'
import ButtonTest from './button-test'
import CardTest from './card-test'
import ContentTest from './content-test'
import DeleteTest from './delete-test'
import DropdownTest from './dropdown-test'
// import FormTest from './form-test'
// import HeroTest from './hero-test'
import IconTest from './icon-test'
import ImagesTest from './images-test'
import LevelTest from './level-test'
import MediaTest from './media-test'
// import MenuTest from './menu-test'
// import MessageTest from './message-test'
// import ModalTest from './modal-test'
// import NavbarTest from './navbar-test'
// import NavbarMenuHero2Test from './navbarMenuHero2-test'

import NotificationsTest from './notifications-test'
// import PaginationTest from './pagination-test'
// import PanelTest from './panel-test'
import ProgressTest from './progress-test'
import TableTest from './table-test'
// import TabsTest from './tabs-test'
import TagTest from './tag-test'
import TypographyTest from './typography-test'

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
        <ImagesTest />
        <NotificationsTest />
        <ProgressTest />
        <TableTest />
        <TagTest />
        <BreadcrumbTest />
        {/* <HeroTest /> */}
        {/* <NavbarMenuHero2Test /> */}

        <CardTest />
        <DropdownTest />
        <LevelTest />
        <MediaTest />
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