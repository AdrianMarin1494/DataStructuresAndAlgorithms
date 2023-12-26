// https://www.codewars.com/kata/62c68f0920d291001737fa22

const rateProfile = (profile, swipeLeft, swipeRight) => {
    // TODO: implement function
    const favoriteLanguage = 'JavaScript';
    if(profile['bio'].includes(favoriteLanguage)) {
      swipeRight();
    }
    else {
      swipeLeft();
    }
  };