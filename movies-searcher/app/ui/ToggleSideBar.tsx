'use client'

import { SideBarContainer, SideBar, CloseButton } from 'toggle-navbar'

export default function ToggleSideBar (): JSX.Element {
  return (
        <SideBarContainer>
          <SideBar
            buttonContent={<span>open</span>}
            navClass='bg-black z-[5000] w-[500px]'
            side='left'
          >
            <CloseButton className='w-max p-3 text-white text-xl m-10'>close</CloseButton>
          </SideBar>
        </SideBarContainer>
  )
}
