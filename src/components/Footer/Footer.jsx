import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor 
                                ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
            Whether you're looking for a skilled UI/UX developer, a problem-solving back-end engineer, or a collaborative front-end developer, I'm eager to discuss your project and how I can contribute. Feel free to reach out through the contact details provided.            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow Me :
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                text-center'>
                <a href="https://github.com/khalid04-mini" target='_blank' rel="noreferrer" className="text-gray-300 font-[500] text-[18px]">
                  <i class='ri-github-line'></i>
                </a>

              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                text-center'>
                <a href="https://www.linkedin.com/in/khalid-lamhal-b75464221/" target='_blank' rel="noreferrer" className="text-gray-300 font-[500] text-[18px]">
                  <i class='ri-linkedin-line'></i>
                </a>

              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                text-center'>
                <a href="https://www.instagram.com/lamhal_khalid/" target='_blank' rel="noreferrer" className="text-gray-300 font-[500] text-[18px]">
                  <i class='ri-instagram-line'></i>
                </a>

              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                text-center'>
                <a href="https://www.facebook.com/khalid.lamhal.9/" target='_blank' rel="noreferrer" className="text-gray-300 font-[500] text-[18px]">
                  <i class='ri-facebook-line'></i>
                </a>

              </span>
            </div>


          </div>


        </div>
        {/*  menu */}
        <div className=''>
          <ul className="flex items-center justify-around gap-10 mt-10 hover:text-white border-white">
            <li>
              <a className='text-gray-400 font-[600]  ' href="#about">About</a>
            </li>
            <li>
              <a className='text-gray-400 font-[600]  ' href="#services">Services</a>
            </li>
            <li>
              <a className='text-gray-400 font-[600] ' href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a className='text-gray-400 font-[600] ' href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/*  menu end */}
      </div>
      {/* footer top end */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-end sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">

              </div>
              <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white
                    font-[500] text-[18px] flex items-center justify-center">
                K
              </span>

            </div>
            <div className="text-white">
              © {new Date().getFullYear()}, Built with ❤️ by Khalid. <br />
              <p className='items-end'>All rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer