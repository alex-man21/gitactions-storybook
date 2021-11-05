module.exports = {
  concurrency: 2,
  browser: [
    {width: 1280, height: 1024, name: 'ie11'},
    {width: 1280, height: 1024, name: 'chrome'}
  ],
  
  batchId: process.env.APPLITOOLS_BATCH_ID
  // visualGridOptions: {
  //   polyfillAdoptedStyleSheets: true,
  //   ieV2: true    
  // }
}
