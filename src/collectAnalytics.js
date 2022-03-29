const bugsVsFeatures = require("./bugsVsFeatures");

function addIssueData(issue) {
  bugsVsFeatures.addIssueData(issue);
}

function printResults() {
  bugsVsFeatures.printResults();
}

module.exports = {
  addIssueData,
  printResults,
};
