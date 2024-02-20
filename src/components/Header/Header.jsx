import React , {useRef , useEffect} from 'react'

const Header = () => {

  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll' , () => {

    
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
    })
  };
  
  useEffect(() => {
    stickyHeaderFunc()
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);
  
  // Rest of your component code
  


  return (
    <div>
      <header
        ref={headerRef}
        className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-[10px]">
              <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                K
              </span>

              <div className="leading-[20px]">
                <h2 className='text-xl text-smallTextColor font-[700]'>Lamhal</h2>
                <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>
              </div>
            </div>
            {/* logo end */}

            {/*  menu */}
            <div className='menu'>
              <ul className="flex items-center gap-10">
                <li>
                  <a className='text-smallTextColor font-[600]' href="#about">About</a>
                  </li>
                <li>
                  <a className='text-smallTextColor font-[600]' href="#services">Services</a>
                  </li>
                <li>
                  <a className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a>
                  </li>
                <li>
                  <a className='text-smallTextColor font-[600]' href="#contact">Contact</a>
                  </li>
              </ul>
            </div>
            {/*  menu end */}


            {/*  menu right */}

            <div className="flex items-center gap-4"> 
              <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font[500] ease-in duration-300'>
              <i class="ri-send-plane-line"></i>
              <a href="https://www.linkedin.com/in/khalid-lamhal-b75464221/" target='_blank' rel="noreferrer">Let's Talk
              </a>
              </button>

              <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                <i class="ri-menu-line"></i>
              </span>

            </div>
            {/*  menu right end */}

          </div>
        </div>
      </header>
    </div>
  )
}
export default Header;