import FooterLink from './Footer/FooterLink'
import { lusitana } from './fonts'

export function Footer (): JSX.Element {
  return (
    <footer className={`${lusitana.className} w-full flex justify-center h-80 bg-white`}>
      <div className='flex flex-col gap-10 items-center justify-center w-full h-full mx-6 border-t border-[#888888] xs:mx-10 lg:mx-24 2xl:mx-44'>
        <h2 className='text-4xl font-bold'>PIQUIN STORE</h2>
        <div className='flex flex-col items-center justify-center gap-6'>
          <h4 className='text-base font-sm'>DEVELOPER INFO</h4>
          <div className='flex gap-4'>
            <FooterLink text='Linkedin' style='text-blue-700 font-bold' link='https://www.linkedin.com/in/santiagopiquinvillegas/' icon='fa-brands fa-linkedin' />
            <span>-</span>
            <FooterLink text='Github' style='text-blue-700 font-bold' link='https://github.com/PiquinX' icon='fa-brands fa-github' />
            <span>-</span>
            <FooterLink text='Email' style='text-blue-700 font-bold' link='mailto:sanpiquin@gmail.com' icon='fa-regular fa-envelope' />
          </div>
        </div>
      </div>
    </footer>
  )
}
