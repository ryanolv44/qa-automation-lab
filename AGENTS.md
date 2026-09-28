# Repository Guidelines

## Project Overview

QA Automation Lab is a QA portfolio project focused on:

* test design;
* API testing;
* Postman;
* Playwright;
* TypeScript;
* SQL;
* bug reporting;
* regression testing;
* Git;
* CI/CD.

The project uses an existing application/API as the System Under Test. We are not developing the application itself.

The main project plan is documented in:

`docs/PROJECT_PLAN.md`

Read the relevant parts of that document before making significant changes.

## Project Structure

* `docs/` — QA documentation, test strategy, test data, defects and execution reports.
* `postman/` — Postman collections and environments.
* `tests/` — automated tests.
* `.github/` — GitHub workflows and repository-specific configuration.

Keep files in the appropriate directory and avoid creating new top-level directories without a clear reason.

## Development Guidelines

* Use TypeScript for Playwright automation.
* Prefer simple and readable test code.
* Keep tests isolated where practical.
* Reuse fixtures and helpers when they reduce duplication without hiding test intent.
* Assertions should verify meaningful behavior, not implementation details.
* Do not automate a scenario only to increase the number of tests.

## QA Guidelines

* Do not invent requirements or expected behavior.
* Expected results should come from documented requirements, API documentation, observed behavior or another explicit test oracle.
* Separate test design decisions from implementation details.
* Keep positive, negative, boundary and regression scenarios distinguishable when relevant.
* Bug reports must contain reproducible steps and evidence whenever possible.
* Do not change severity or priority of an existing defect without documenting the reason.

## Validation

After modifying automated tests:

1. Run the smallest relevant test set first.
2. Run broader tests when the change affects shared functionality.
3. Report failures and distinguish new failures from pre-existing or unrelated failures.

Use the repository's package scripts when available instead of inventing alternative commands.

## Change Boundaries

* Do not change project scope silently.
* Do not introduce a new testing framework or major dependency without a clear reason.
* Do not replace an accepted QA strategy or project decision without documenting the change.
* Do not modify unrelated files as part of a focused task.

## AI Assistance

AI tools may be used for explanation, code generation, test-case suggestions, review and debugging.

AI-generated tests, assertions and recommendations must be reviewed before being considered correct.

The agent should ask for clarification or report a conflict when requirements or existing project decisions are ambiguous.

Do not claim that a test passed unless it was actually executed and the result is available.