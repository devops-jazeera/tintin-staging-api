// const QRReader = require("qrcode-reader");
// const fs = require("fs");
// const jimp = require("jimp");
// const jsQR = require("jsqr");
// const qrcode = require("qrcode");
// const QrcodeDecoder = require("qrcode-decoder");
async function run() {
  // const jimg = await jimp.read(fs.readFileSync("./docs/scan/TestC1.png"));
  // console.log(jimg.bitmap);
  // const imgURI = await jimg.getBase64Async("image/png");

  //console.log(img);
  //const qr = new QRReader();

  //   // qrcode-reader's API doesn't support promises, so wrap it
  //   const value = await new Promise((resolve, reject) => {
  //     qr.callback = (err, v) => (err != null ? reject(err) : resolve(v));
  //     qr.decode(jimg.bitmap);
  //   });

  // { result: 'http://asyncawait.net',
  //   points:
  //     [ FinderPattern {
  //         x: 68.5,
  //         y: 252,
  //         count: 10,
  // ...
  //console.log(value);

  // http://asyncawait.net
  //console.log(value.result);
  // console.log(new Uint8ClampedArray(jimg.bitmap.data), jimg.bitmap.width, jimg.bitmap.height);

  //const code = jsQR(jimg.bitmap.data, jimg.bitmap.width, jimg.bitmap.height);
  //const code = jsQR(jimg.bitmap.data, jimg.bitmap.width, jimg.bitmap.height);

  //   qrcode.decode(imgURI, (code) => {
  //     console.log(code);
  //   });

  // const image = new Image();
  // image.src = imgURI;

  // var qr = new QrcodeDecoder();
  // let code = await qr.decodeFromImage(imgURI);
  // console.log(code);

  console.log(require("crypto").randomBytes(16).values());
}
run();
