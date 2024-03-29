const aboutMe = require('./utils/aboutMe');
const MY_NAME = "Alexandre"
/**
 * Request structure
 * req = { body: { } 
 *         param: name: string 
 *        }
 * res = { json: { hello + 'name' } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async req => {
    const inputs = {};
    if(req.query.name === undefined || req.query.name === null || req.query.name === ''){
      throw new Error('Name is null or undefined');
    }
    inputs.name = req.query.name;
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async inputs => {
    if(MY_NAME == inputs.name){
      param = aboutMe;
    }else{
      param = "hello " + inputs.name;
    }
    return param ;
  };
  
  /**
   * LOGIC :
   */
  const read = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
  
      res.status(200).json(param);
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = read;