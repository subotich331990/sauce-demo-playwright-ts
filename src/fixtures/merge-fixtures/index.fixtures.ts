import { mergeTests } from "@playwright/test";
import { mergeExpects } from "@playwright/test";
import { test as Hooks } from "../hooks.fixture";
import { test as pageObjects } from "../page-object.fixture";
import { test as automaticFixtures } from "../automatic.fixture";
import { test as pageObjectValidator } from "../page-object-validator.fixture";

export const test = mergeTests( pageObjects, Hooks, automaticFixtures, pageObjectValidator);
export const expect = mergeExpects(pageObjects);