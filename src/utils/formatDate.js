export const formatDate = (sqlTimeStamp) => {
  const splitDateStr = sqlTimeStamp.split("T");
  const dateArr = splitDateStr[0].split("-");
  return dateArr.reverse().join("/");
};
