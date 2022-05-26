const jiraConstants = require("../src/constants");
const {
  PRODUCT_CHARTER,
  STATUS,
  ISSUE_TYPE,
  ISSUE_TYPE_BUG,
  ISSUE_TYPE_QA_TASK,
  STORY_POINTS,
  ESCALATED,
} = require("./constants");

const resultsMap = new Map();

function addIssueData(issue) {
  //console.log(issue);
  // setup value array if first time through charter
  if (!resultsMap.has(issue[PRODUCT_CHARTER])) {
    resultsMap.set(issue[PRODUCT_CHARTER], [0, 0]);
  }
  if (
    issue[ISSUE_TYPE] !== ISSUE_TYPE_BUG &&
    issue[ESCALATED] === "Yes" &&
    jiraConstants.isResolved(issue[STATUS])
  ) {
    let valuesArray = resultsMap.get(issue[PRODUCT_CHARTER]);
    let updatedCompletedCount = valuesArray[0] + 1;
    resultsMap.set(issue[PRODUCT_CHARTER], [updatedCompletedCount, 0]);
  }
}

function printResults() {
  console.log("*********** Escalations *************");
  console.log(resultsMap);

  let completedCount = 0;

  for (let value of resultsMap.values()) {
    completedCount += value[0];
  }
  console.log("Total Completed Escalations : " + completedCount);
}

module.exports = { addIssueData, printResults };
