export const calcDiffTime = function (createdTime) {
  let timeDiff = new Date() - new Date(createdTime)
  let hourDiff = Math.floor(timeDiff/(1000*60*60))
  console.log((0<hourDiff && hourDiff <24))
  if(0<hourDiff  && hourDiff<24) {
    return hourDiff + ' times ago'
  } else if(hourDiff<=0) {
    let minDiff = Math.floor(timeDiff/(1000*60))
    if(minDiff>0) {
      return minDiff + ' minutes ago';
    } else {
      return 'just before'
    }
  } else {
    let dayDiff = Math.floor(timeDiff/(1000*60*60*24))
    return dayDiff + ' days ago'
  }
}