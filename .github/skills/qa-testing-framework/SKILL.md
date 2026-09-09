---
name: qa-testing-framework
description: "Use when defining or executing QA workflows, building test plans, validating security and data integrity, checking usability/accessibility, and documenting defects with structured evidence. Triggers for functional testing, regression checks, OWASP reviews, WCAG checks, and bug report standardization."
---

# Quality Assurance & Testing Framework

## Core Objective

Define the methodologies, security protocols, and usability standards required to ensure system integrity, user satisfaction, and functional excellence across all project modules.

## 1. Functional Testing (The Logic Layer)

- Requirements Traceability: Map every test case to a specific functional requirement to target 100% coverage.
- Boundary Value Analysis (BVA): Test the extreme edges of input fields (minimum/maximum characters, dates, and numerical limits).
- Regression Suite Management: Maintain a gold-standard test suite to run after every deployment and verify existing features remain stable.
- Error Handling: Verify the system fails gracefully with helpful error messages instead of crashing.

## 2. Security & Data Integrity

- OWASP Top 10 Alignment: Check for common vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), and Broken Authentication.
- Role-Based Access Control (RBAC): Validate users can only access data and features mapped to their permissions.
- Data Encryption: Ensure sensitive data is masked in the UI and protected in transit (SSL/TLS) and at rest.
- Input Sanitization: Test that all user-facing forms reject malicious scripts and invalid data formats.

## 3. Usability & Accessibility (UX)

- Heuristic Evaluation: Validate clarity, consistency, and user control against recognized usability heuristics.
- Responsiveness: Confirm stable behavior across Mobile, Tablet, and Desktop screen sizes and across major browsers.
- Accessibility (WCAG 2.1): Verify keyboard navigation, semantic structure, and screen-reader compatibility.
- Workflow Intuition: Validate first-time users can complete primary tasks (for example, form submission) without documentation.

## 4. Technical Documentation Standards

- Test Case Structure: Each test case must include pre-conditions, numbered steps to reproduce, expected result, actual result, and severity/priority.
- Severity/Priority Scale: Classify findings as Blocker, Critical, Major, or Minor.
- Bug Reporting: Use standardized issue templates including environment details (OS and browser version) and visual/log evidence.

## Execution Checklist

1. Define test scope and map requirements.
2. Prepare functional, security, UX, and accessibility scenarios.
3. Run tests and capture evidence.
4. Log defects with severity and reproduction steps.
5. Re-run regression suite after fixes and deployment.

## Common Tasks

- Create a release test plan and coverage matrix.
- Review form validation with BVA and sanitization checks.
- Run OWASP-focused security checks for web features.
- Validate responsive layouts and WCAG-related accessibility.
- Produce standardized bug reports for engineering handoff.
