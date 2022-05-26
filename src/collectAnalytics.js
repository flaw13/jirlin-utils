const bugsVsFeatures = require("./bugsVsFeatures");
const committedVsCompleted = require("./committedVsCompleted");
const esclatedCreatedVsCompleted = require("./escalationsCreatedVsCompleted");
const wipAnalytics = require("./wipAnalytics");

function addIssueData(issue) {
  bugsVsFeatures.addIssueData(issue);
  committedVsCompleted.addIssueData(issue);
  esclatedCreatedVsCompleted.addIssueData(issue);
  wipAnalytics.addIssueData(issue);
}

function printResults() {
  bugsVsFeatures.printResults();
  console.log();
  committedVsCompleted.printResults();
  console.log();
  esclatedCreatedVsCompleted.printResults();
  console.log();
  wipAnalytics.printResults();
}

module.exports = {
  addIssueData,
  printResults,
};
