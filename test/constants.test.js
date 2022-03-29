const jiraConstants = require("../src/constants");

test("Test Resolved", () => {
  expect(jiraConstants.isResolved(jiraConstants.STATUS_DONE)).toBeTruthy();
  expect(jiraConstants.isResolved(jiraConstants.STATUS_CLOSED)).toBeTruthy();
  expect(jiraConstants.isResolved(jiraConstants.STATUS_BACKLOG)).toBeFalsy();
});
