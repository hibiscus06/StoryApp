import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="bg-custom-lightBlue text-custom-darkBlue p-4">
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:text-custom-mediumBlue">Home</a></li>
    <li><a href="#" class="hover:text-custom-mediumBlue">Stories</a></li>
    <li><a href="#" class="hover:text-custom-mediumBlue">Profile</a></li>
  </ul>
</nav>
    </>
  )
}

export default Navbar