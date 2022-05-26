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
    resultsMap.set(issue[PRODUCT_CHARTER], [0, 0, 0]);
  }

  // Check to see if the issue is resolved or not
  if (
    jiraConstants.isResolved(issue[STATUS]) &&
    issue[ISSUE_TYPE] !== ISSUE_TYPE_QA_TASK
  ) {
    let valuesArray = resultsMap.get(issue[PRODUCT_CHARTER]);
    let updateIndex = issue[ISSUE_TYPE] === ISSUE_TYPE_BUG ? 0 : 1;
    valuesArray[updateIndex] =
      valuesArray[updateIndex] + Number(issue[STORY_POINTS]);
    valuesArray[2] = Math.round((valuesArray[0] / valuesArray[1]) * 100) + "%";
    let value = resultsMap.get(issue[PRODUCT_CHARTER]);
    resultsMap.set(issue[PRODUCT_CHARTER], valuesArray);
  }
}

function printResults() {
  console.log("*********** Bugs vs. Feature Work *************");
  console.log(resultsMap);

  let bugsCount = 0;
  let featureWorkCount = 0;

  for (let value of resultsMap.values()) {
    bugsCount += value[0];
    featureWorkCount += value[1];
  }
  console.log("Total Bug Story Points: " + bugsCount);
  console.log("Total Feature Work Story Points: " + featureWorkCount);
  console.log("Percentage of Bugs: " + (bugsCount / featureWorkCount) * 100);
}

module.exports = { addIssueData, printResults };
