const getReadableDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    const yyyy = date.getFullYear();
    if (dd < 10) { dd = `0${dd}`}
    if (mm < 10) {mm = `0${mm}`}
    let result = `${dd}/${mm}/${yyyy}`
    return result
}

const stringToDate = (dateStr) => {
    var parts = dateStr.split("-")
    return new Date(parts[0], parts[1] - 1, parts[2])
  }

const formatDate = (dateStr) => {
    let dateObj = stringToDate(dateStr)
    return getReadableDate(dateObj)
}
export {formatDate}