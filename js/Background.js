function setMainBackground(){
  getElement('background-image').style.backgroundImage = 'url(' + getRandomBackgroundPath() + ')';
}

function getRandomBackgroundPath(){
  var backgroundFolder = getBackgroundFolder();
  if (backgroundFolder === 'other') return 'https://lh3.googleusercontent.com/8SUrvzazjALC5kEYySvjcySw0pgrD-0yd8NJZJLlzENPWd7lwqriwdoBy5e5ZN0Gkv3ZQ8IYrQ01vyjH_2IjszWKT3lPNWmwOC_c2duSaTUpWfEv_xxhe40qgtg3eSwOa7viSVqxbQ20znhTjh_WZE2ahEPgTZLCNpACr_5VCykPkoFvn9vl02dt3_jtcdqR8jThOk6U0fA4WzD1S1z2o2QWxI8ULS0x510B6C68daA0a85DfdFfeA55bf7c436c29b7d792zvTQsAuoK8c0gPMU8qyXTerPvyU3F4M15gF_DNL-rL4iUF2FxjgjMY_XvI8mw0kiFA3p0pvdVCnW9eV6y8OlT4w_YRpBS0OV0vuQoCqIrnq7OPECExDZ9iphvMwtQHh-W27YtsbFPa9asGXnF82jw-nargeGbHi8bXxRWphv26AtUGAHt5oyuk4wPi3bXr2gZcVYepeipjq37JK9cLiYk1BV1nZ7udiFr6MNqj3PGR4PGXzCGYQw7UemxRoRxCC97qyJPEg-L4FU9v7a25aEQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMF56izDL_kO-0Vj8NqmcnHFztp53C1pSdpVjsf9ANBCtpYHKomCBSd8pk0-OVgxrS8Qq-IH7urB9sg5vCav0fHtTNK_m5BMhQg=w1920-h1080-no'

  var folderCount = getFolderCount(backgroundFolder);
  var index = randomNumber(folderCount);
  var filePath = 'assets/backgrounds/' + backgroundFolder + "/" + index + '.jpg';
  return filePath;
}

function getBackgroundFolder(){
  var condition = currentIcon;
  var backgroundFolder = "other";
  if(CONFIG.useTWC) {
    switch (condition) {
      case 0: // tstorm
      case 1:
      case 2:
      case 3:
      case 4:
      case 17:
      case 37:
      case 38:
      case 47: // tstorm
        backgroundFolder = 'tstorm'
        break

      case 5: // rain / snow
      case 7: // wintry mix
        backgroundFolder = Math.random() >= 0.50 ? 'snow' : 'rain'
        break

      case 8: // rain
      case 9:
      case 10:
      case 11:
      case 12:
      case 35:
      case 39:
      case 40: // rain
        backgroundFolder = 'rain'
        break

      case 13: // snow
      case 14:
      case 15:
      case 16:
      case 18:
      case 41:
      case 42:
      case 43:
      case 46: // snow
        backgroundFolder = 'snow'
        break

      case 19: // fog / haze
      case 20:
      case 21:
      case 22: // fog / haze
        backgroundFolder = 'fog'
        break
    }
  } else {
    if(condition.includes("snow") || condition.includes("flurr")){
      backgroundFolder = "snow";
    }else if(condition.includes("rain")){
      backgroundFolder = "rain";
    }else if (condition.includes("fog") || condition.includes("haz")){
      backgroundFolder = "fog";
    }else if(condition.includes("storm")){
      backgroundFolder = "tstorm";
    }
  }
  return backgroundFolder;
}

function getFolderCount(folderName){
  switch(folderName) {
    case 'snow':
      return 4;
    case 'rain':
      return 5;
    case 'fog':
      return 8;
    case 'tstorm':
      return 9;
    default:
      return 0;
  }
}

function randomNumber(max){
  return Math.floor(Math.random() * max) + 1
}
