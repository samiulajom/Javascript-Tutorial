let asyncIterator = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({
            value: i++,
            done: false,
          });
        } else {
          return Promise.resolve({
            done: true,
          });
        }
      },
    };
  },
};
// let iterate = asyncIterator[Symbol.asyncIterator]();
// // console.log(iterate.next());
// (async function () {
//   // let v=await iterate.next();
//   // console.log(v);
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
//   console.log(await iterate.next());
// })();
//!for await loop
// (async function () {
//   for await (let v of asyncIterator) {
//     console.log(v);
//   }
// })();
