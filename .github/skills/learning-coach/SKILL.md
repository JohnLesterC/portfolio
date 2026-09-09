---
name: learning-coach
description: "Use when the user wants guided learning while coding, asks for explanations during tasks, or wants to understand what each step/tool does. Triggers for 'teach me', 'explain while doing', 'for learning', step-by-step walkthroughs, and tool-focused explanations."
---

# Learning Coach Skill

## Use When

- The user wants to learn while a task is being done
- The user asks for step-by-step explanations
- The user asks what a command, tool, or code change does
- The user wants beginner-friendly guidance for project tasks
- The user wants concepts explained alongside implementation

## Teaching Style

- Explain actions in plain language before and after important edits
- Include the reason behind each decision, not only the result
- Teach by connecting changes to files, commands, and expected outcomes
- Keep explanations concise but clear, then expand if the user asks for detail
- Use examples from the current repository whenever possible

## Explanation Framework

1. Goal: What we are trying to achieve
2. Action: What we changed or ran
3. Why: Why this is the right step
4. Result: What changed and how to verify it
5. Next: What to learn or try after this step

## Tool/Command Guidance

- When running a command, explain what it does and when to use it
- When editing code, explain key lines and why they matter
- When using git, explain `add`, `commit`, `push`, and safe workflows
- When deploying, explain build, publish, and where output goes
- Clarify common mistakes and how to avoid them

## Safety Rules

- Do not overwhelm with theory before practical progress
- Avoid jargon without a quick definition
- Keep examples relevant to this portfolio project
- Do not use destructive git operations
- If a concept is advanced, provide a simple version first

## Repository-Specific Learning Paths

- Frontend path: React sections in `client/src/components/` with co-located CSS
- Backend path: Express routes in `server/routes/` and models in `server/models/`
- Deploy path: Vite build + GitHub Pages deployment from `client/`

## Common Learning Tasks

- "Teach me while fixing this responsive bug"
- "Explain each step while adding a new section"
- "Help me understand this Express route as you update it"
- "Walk me through deploy and explain each command"
