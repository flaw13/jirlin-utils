const jiraConstants = require("../src/constants");
const {
  PRODUCT_CHARTER,
  ASSIGNEE,
  COMPONENTS,
  STATUS,
  ISSUE_TYPE,
  ISSUE_TYPE_EPIC,
  STORY_POINTS,
  ESCALATED,
} = require("./constants");

const resultsMap = new Map();

function addIssueData(issue) {
  //console.log(issue);
  // setup value array if first time through charter
  if (!resultsMap.has(issue[PRODUCT_CHARTER])) {
    resultsMap.set(issue[PRODUCT_CHARTER], [0]);
  }
  if (
    issue[ISSUE_TYPE] !== ISSUE_TYPE_EPIC &&
    jiraConstants.isWIP(issue[STATUS])
  ) {
    let valuesArray = resultsMap.get(issue[PRODUCT_CHARTER]);
    let updatedCompletedCount = valuesArray[0] + Number(issue[STORY_POINTS]);
    resultsMap.set(issue[PRODUCT_CHARTER], [updatedCompletedCount]);
  }
}

function printResults() {
  console.log("*********** WIP *************");
  console.log(resultsMap);

  let storyPointCount = 0;

  for (let value of resultsMap.values()) {
    storyPointCount += value[0];
  }
  console.log("Total WIP Story Points : " + storyPointCount);
}

module.exports = { addIssueData, printResults };
