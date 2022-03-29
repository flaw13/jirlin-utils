const jiraConstants = require("../src/constants");
const {
  PRODUCT_CHARTER,
  STATUS,
  ISSUE_TYPE,
  ISSUE_TYPE_BUG,
  ISSUE_TYPE_QA_TASK,
  STORY_POINTS,
} = require("./constants");

const resultsMap = new Map();

function addIssueData(issue) {
  //console.log(issue);
  // setup value array if first time through charter
  if (!resultsMap.has(issue[PRODUCT_CHARTER])) {
    resultsMap.set(issue[PRODUCT_CHARTER], [0, 0]);
  }
  if (issue[ISSUE_TYPE] !== ISSUE_TYPE_QA_TASK) {
    let valuesArray = resultsMap.get(issue[PRODUCT_CHARTER]);
    let storyPoints = Number(issue[STORY_POINTS]);
    let updatedCommitted = valuesArray[0] + storyPoints;
    //let updatedCompleted = valuesArray[1] + storyPoints;
    let updatedCompleted =
      valuesArray[1] +
      (jiraConstants.isResolved(issue[STATUS]) ? storyPoints : 0);
    resultsMap.set(issue[PRODUCT_CHARTER], [
      updatedCommitted,
      updatedCompleted,
    ]);
  }
}

function printResults() {
  console.log("*********** Committed vs. Completed *************");
  console.log(resultsMap);

  let committedCount = 0;
  let completedCount = 0;

  for (let value of resultsMap.values()) {
    committedCount += value[0];
    completedCount += value[1];
  }
  console.log("Total Committed Story Points: " + committedCount);
  console.log("Total Completed Story Points: " + completedCount);
  console.log(
    "Percentage of Completed: " + (completedCount / committedCount) * 100
  );
}

module.exports = { addIssueData, printResults };
