if (!process.env.APPLITOOLS_BRANCH_NAME) APPLITOOLS_BRANCH_NAME = process.env.APPLITOOLS_BRANCH_NAME;

module.exports = {
  concurrency: 2,
  browser: [
    {width: 1280, height: 1024, name: 'ie11'},
    {width: 1280, height: 1024, name: 'chrome'},
    {width: 1280, height: 1024, name: 'firefox'}
  ],
  apiKey: process.env.APPLITOOLS_API_KEY,
  batchId: process.env.APPLITOOLS_BATCH_ID,
  batchName: `${process.env.GITHUB_EVENT} gitactions_storybook: ${process.env.APPLITOOLS_BATCH_ID}`,
  storybookUrl: `http://localhost.com:9009`,
  include: "storytitle"
  // visualGridOptions: {
  //   polyfillAdoptedStyleSheets: true,
  //   ieV2: true    
  // }
}
