import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/maximus71296">
          <BsGithub />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/rajat.gautam.5454">
          <FaFacebookF />
        </a>
      </div>

      <div>
        <a href="https://instagram.com/_maximus777?igshid=YmMyMTA2M2Y=">
        <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
