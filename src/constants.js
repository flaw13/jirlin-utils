const SUMMARY = "Summary";
const ISSUE_TYPE = "Issue Type";
const JIRA_KEY = "Key";
const ASSIGNEE = "Assignee";
const PRIORITY = "Priority";
const STATUS = "Status";
const UPDATED = "Updated";
const DUE_DATE = "Due date";
const PROJECT = "Project";
const COMPONENTS = "Components";
const PRODUCT_CHARTER = "Product Charter";
const REASON_FOR_CLOSING = "Reason for Closing";
const CUSTOMER_TIER = "Customer Tier";
const STORY_POINTS = "Story Points (Low-level Estimating)";
const CREATED = "Created";
const ESCALATED = "Escalated to Engineering?";
const SPRINT = "Sprint";
const RESOLUTION = "Resolution";
const HEADERS = [
  SUMMARY,
  ISSUE_TYPE,
  JIRA_KEY,
  ASSIGNEE,
  PRIORITY,
  STATUS,
  UPDATED,
  DUE_DATE,
  PROJECT,
  COMPONENTS,
  PRODUCT_CHARTER,
  REASON_FOR_CLOSING,
  CUSTOMER_TIER,
  STORY_POINTS,
  CREATED,
  ESCALATED,
  SPRINT,
  RESOLUTION,
];

const STATUS_DONE = "Done";
const STATUS_CLOSED = "Closed";
const STATUS_BACKLOG = "Backlog";
const STATUS_ON_DECK = "On Deck";
const STATUS_READY_FOR_DEVELOPMENT = "Ready for Development";
const STATUS_TESTED = "Tested";
const STATUS_IN_TESTING = "In Testing";

const PRIORITY_P0 = "P0";
const PRIORITY_P1 = "P1";
const PRIORITY_P2 = "P2";
const PRIORITY_P3 = "P3";

const ISSUE_TYPE_BUG = "Bug";
const ISSUE_TYPE_QA_TASK = "QA Task";
const ISSUE_TYPE_EPIC = "Epic";

function isResolved(status) {
  return status === STATUS_DONE || status === STATUS_CLOSED;
}

function isWIP(status) {
  return (
    status !== STATUS_DONE &&
    status !== STATUS_CLOSED &&
    status !== STATUS_BACKLOG &&
    status !== STATUS_ON_DECK &&
    status !== STATUS_READY_FOR_DEVELOPMENT &&
    status !== STATUS_TESTED
  );
}

module.exports = {
  SUMMARY,
  ISSUE_TYPE,
  JIRA_KEY,
  ASSIGNEE,
  PRIORITY,
  STATUS,
  UPDATED,
  DUE_DATE,
  PROJECT,
  COMPONENTS,
  PRODUCT_CHARTER,
  REASON_FOR_CLOSING,
  CUSTOMER_TIER,
  STORY_POINTS,
  CREATED,
  ESCALATED,
  STATUS_DONE,
  STATUS_CLOSED,
  STATUS_BACKLOG,
  PRIORITY_P0,
  PRIORITY_P1,
  PRIORITY_P2,
  PRIORITY_P3,
  ISSUE_TYPE_BUG,
  ISSUE_TYPE_QA_TASK,
  ISSUE_TYPE_EPIC,
  isResolved,
  isWIP,
};
