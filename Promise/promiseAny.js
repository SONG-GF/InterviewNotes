function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    promises = Array.isArray(promises) ? promises : [];
    let len = promises.length;
    let errs = [];
    if (len === 0)
      return reject(new AggregateError("All promises were rejected"));
    promises.forEach((promsie) => {
      try {
        promsie.then(
          (value) => {
            resolve(value);
          },
          (err) => {
            len--;
            errs.push(err);
            if (len === 0) {
              reject(new AggregateError(errs));
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  });
}
