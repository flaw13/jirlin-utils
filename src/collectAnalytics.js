const bugsVsFeatures = require("./bugsVsFeatures");
const committedVsCompleted = require("./committedVsCompleted");

function addIssueData(issue) {
  bugsVsFeatures.addIssueData(issue);
  committedVsCompleted.addIssueData(issue);
}

function printResults() {
  bugsVsFeatures.printResults();
  console.log();
  committedVsCompleted.printResults();
}

module.exports = {
  addIssueData,
  printResults,
};
