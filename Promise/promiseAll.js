/**
 * @param {Array<function>}  functions
 * @return {Promsie<any>}
 */

var promiseArr = async function (functions) {
  return new Promise((resolve, reject) => {
    const length = functions.length;
    let res = new Array(length);
    functions.forEach((item) => {
      try {
        item().then((r) => {
          res.push(r);
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
};
