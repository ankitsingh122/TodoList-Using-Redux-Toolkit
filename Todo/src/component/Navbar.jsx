import React from 'react'

function Navbar() {
  return (
    <>
      
      <div className='text-6xl flex justify-center mt-32'>TODO LIST</div>

      <section>
        <nav className='flex justify-center'>
          <ul className="flex justify-center space-x-10 w-max  mt-20  px-6  rounded-md py-2 bg-purple-500 text-white text-2xl ">
            
            <li >
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar
