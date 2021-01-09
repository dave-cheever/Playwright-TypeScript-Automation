// step-definitions/homepage.ts
import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";
// Using a cucumber expression

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const trimExcessWhiteSpace = (s: string) =>
  s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
//   const expect = require("expect");

Then("I expect to be on the dine-in page", async function (this: OurWorld){
    await sleep(1000);
    await assert.equal(this.page.url(),"https://staging.mryum.com/demo/dine-in");
  });

Then("I expect to be on the Lunch page", async function (this: OurWorld){
    await assert.equal(this.page.url(),"https://staging.mryum.com/demo/dine-in/dining-in");
  });

Then("I expect to be on the Drinks page", async function (this: OurWorld){
    await assert.equal(this.page.url(),"https://staging.mryum.com/demo/dine-in/drinks");
  });

Then("I expect to be on the Breakfast page", async function (this: OurWorld){
    await assert.equal(this.page.url(),"https://staging.mryum.com/demo/dine-in/breakfast");
  });

