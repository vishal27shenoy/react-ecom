const apirequest = async (url = "", optionsObj = "null", errMsg = "null") => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw new Error("Please reload app");
    }
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};
export default apirequest;
