import Logo from '/trans_bg.png'

function Header() {
  return (
    <div>
        <img className= "h-[10em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"src={Logo}  alt="PostsApp Logo" />
    </div>
  )
}

export default Header