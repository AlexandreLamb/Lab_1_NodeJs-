/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async req => {
    const inputs = {};
    
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async inputs => {
  };
  
  /**
   * LOGIC :
   */
  const unmatched = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
      console.log();
      res.status(404).sendFile(__dirname+"/utils/404.html");
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = unmatched;