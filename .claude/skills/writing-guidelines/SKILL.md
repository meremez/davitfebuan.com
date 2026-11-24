---
name: writing-guidelines
description: Review docs/prose for Writing Guidelines compliance. Use when asked to "review my docs", "check writing style", "audit prose", "review docs voice and tone", or "check this page against the writing handbook".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Writing Guidelines

Review files for compliance with Writing Guidelines.

## How It Works

1. Read the pinned guidelines in `guidelines.md` (see below)
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in `guidelines.md`
4. Output findings in the terse `file:line` format

## Guidelines Source

Read the rules from `guidelines.md` in this skill folder. It is a pinned copy of
`vercel-labs/writing-guidelines` `command.md` at commit `83e2316b034cf572400513538e4e4da01c4cc742`, vendored so the rules cannot change
without review. Do not fetch a newer version from the network; to update, replace
`guidelines.md` deliberately and record the new commit in `.claude/skills/SOURCES.md`.

## Usage

When a user provides a file or pattern argument:
1. Read `guidelines.md` in this skill folder
2. Read the specified files
3. Apply all rules from `guidelines.md`
4. Output findings using the format specified in `guidelines.md`

If no files specified, ask the user which files to review.
