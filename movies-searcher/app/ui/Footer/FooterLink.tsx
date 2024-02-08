interface Props {
  link: string
  icon: string
  text: string
  style: string
}

const FooterLink: React.FC<Props> = ({ link, icon, text, style }) => {
  return (
      <a className={`${style} relative flex justify-center w-16 overflow-y-hidden group min-[700px]:w-20`} target='blank' href={link}>
        <i className={`${icon} text-xl absolute -top-[1.1em] left-[39%] duration-75 group-hover:translate-y-6 group-focus:translate-y-6`} />
        <span className='text-base absolute duration-75 group-hover:translate-y-5 group-focus:translate-y-5 min-[700px]:text-lg'>{text}</span>
      </a>
  )
}

export default FooterLink
