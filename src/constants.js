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
];

const STATUS_DONE = "Done";
const STATUS_CLOSED = "Closed";
const STATUS_BACKLOG = "Backlog";

const PRIORITY_P0 = "P0";
const PRIORITY_P1 = "P1";
const PRIORITY_P2 = "P2";
const PRIORITY_P3 = "P3";

const ISSUE_TYPE_BUG = "Bug";
const ISSUE_TYPE_QA_TASK = "QA Task";

function isResolved(status) {
  return status === STATUS_DONE || status === STATUS_CLOSED;
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
  isResolved,
};
