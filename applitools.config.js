if (!process.env.APPLITOOLS_BRANCH_NAME) APPLITOOLS_BRANCH_NAME = process.env.APPLITOOLS_BRANCH_NAME;

module.exports = {
  concurrency: 2,
  browser: [
    {width: 1280, height: 1024, name: 'ie11'},
    {width: 1280, height: 1024, name: 'chrome'}
  ],
  apiKey: process.env.APPLITOOLS_API_KEY,
  batchId: process.env.APPLITOOLS_BATCH_ID,
  batchName: `gitactions_storybook: ${process.env.APPLITOOLS_BATCH_ID}`,
  branchName: APPLITOOLS_BRANCH_NAME
  // visualGridOptions: {
  //   polyfillAdoptedStyleSheets: true,
  //   ieV2: true    
  // }
}
