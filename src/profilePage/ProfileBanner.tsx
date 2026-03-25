import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {
  // Hardcoded data
  const bannerData = {
    headline: "Vanshika Kaushik",
    profileSummary: "I am a data analyst with knowledge of Power BI, Tableau, SQL, AWS, and strong leadership, confidence, and communication skills.",
    resumeLink: { url: "https://drive.google.com/file/d/1TWP6S-i-_SGrf4nzQUE-ThBKXV69PHtM/view?usp=drivesdk" },
    linkedinLink: "https://www.linkedin.com/in/vanshika-kaushik-19799a258/",
    backgroundImage: { url: "https://yourdomain.com/background_image.jpg" },
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${bannerData.backgroundImage.url})` }}
    >
      <div className="banner-content">
        <h1 className="banner-headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
