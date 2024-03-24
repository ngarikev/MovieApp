import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FacebookRounded, Instagram, Twitter, YoutubeSearchedForRounded } from "@mui/icons-material";

const SocialIcons = () => {
  return (
    <div style={{ display: 'flex', alignContent:'center', justifyContent: 'space-around', width:'20%' }}>
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        {/* <FaFacebook size={24} /> */}
        <FacebookRounded size={30} />
      </a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
        {/* <FaTwitter size={24} /> */}
        <Twitter size={30}  />
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        {/* <FaInstagram size={24} /> */}
        <Instagram size={30} />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        {/* <FaLinkedin size={24} /> */}
        <YoutubeSearchedForRounded size={30}/>

      </a>
    </div>
  );
};

export default SocialIcons;
