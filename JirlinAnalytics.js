const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const jiraConstants = require("./src/constants");
const collectAnalytics = require("./src/collectAnalytics");

/***** Constants *****/
let csvWriter = undefined;
let data = [];
const newlineCharacter = "\n";
const inputDirectory = "input";
const outputDirectory = "output";

const inputFileName = "Global_Sprint_2022.06_All_Issues.csv";

console.log("Welcome Jirlin! ");
console.log("************* Start Parse ************");

fs.createReadStream(path.resolve(__dirname, inputDirectory, inputFileName))
  .pipe(csv.parse({ headers: true }))
  .on("headers", (headers) => {
    console.log(headers);
  })
  .on("data", (row) => {
    collectAnalytics.addIssueData(row);
  })
  .on("error", (error) => console.error(error))
  .on("end", (rowCount) => {
    collectAnalytics.printResults();
    console.log("Row Count:" + rowCount);
  });

/*
const cleanUpADO = require("./src/CleanUpADOSteps");
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const parser = require("fast-xml-parser");
const he = require("he");
const decode = require("unescape");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const inputDirectory = "input";
const inputFileName = "non-crictial-testcases.csv";
const outputDirectory = "output";
const outputFileName = "non-crictial-testcases-9-30-31_out.csv";
let csvWriter = undefined;
let data = [];
const newlineCharacter = "\n";

const STEPS_KEY = "steps";
const STEP_KEY = "step";
const PARAMETERIZED_STRING_KEY = "parameterizedString";
const COMPREF_KEY = "compref";

console.log("************* Start Clean ************");

fs.createReadStream(path.resolve(__dirname, inputDirectory, inputFileName))
    .pipe(csv.parse({ headers: true }))
    .on("headers", (headers) => (csvWriter = setupOutputFile(headers)))
    .on("data", (row) => {
        const tags = cleanUpADO.wrapInHeader("Tags") + row.Tags + newlineCharacter;
        const steps =
            newlineCharacter +
            cleanUpADO.wrapInHeader("Replication Steps") +
            cleanUpADO.parseSteps(row.Steps);
        row.Steps = tags + steps;
        data.push(row);
    })
    .on("error", (error) => console.error(error))
    .on("end", (rowCount) => endClean(rowCount));

function setupOutputFile(headers) {
    const headerData = headers.map((header) => {
        return { id: header, title: header };
    });
    console.log(headerData);
    return createCsvWriter({
        path: outputDirectory + "/" + outputFileName,
        header: headerData,
    });
}

function endClean(rowCount) {
    csvWriter
        .writeRecords(data)
        .then(() => console.log("The CSV file was written successfully"));
    console.log("************* End Clean ************");
    console.log(`Parsed ${rowCount} rows`);
}

 */
