
# 🧭 Contribution guidelines

A practical guide to setting up and managing your team workflow with GitHub.

---

## 📑 Table of Contents

1. [Setting Up GitHub](#1-setting-up-github)  
2. [Repository Settings](#2-repository-settings)  
3. [Team Access & Key Files](#3-team-access--key-files)  
4. [Branch Strategy](#4-branch-strategy)  
5. [Team Workflow](#5-team-workflow)  
6. [Code Reviews & Pull Requests](#6-code-reviews--pull-requests)  
7. [Writing Good Docs](#7-writing-good-docs)  
8. [Managing Issues & Tasks](#8-managing-issues--tasks)  
9. [Security](#9-security)  

---

## 1. 🚀 Setting Up GitHub

### Create a New Repository
- Navigate to [GitHub](https://github.com/)
- Click **"New repository"**
- Provide:
  - A **clear name** (e.g., `project-name`)
  - A **short description**
  - Set visibility: **Public** or **Private**
- Check **"Add a README file"**

---

## 2. ⚙️ Repository Settings

### Protect Your Main Branch
- Go to: `Settings > Branches > Add rule`
- Target the `main` branch
- Enable:
  - ✅ Require pull request reviews
  - ✅ Require status checks before merging
- Add additional rules as needed for production safety

---

## 3. 👥 Team Access & Key Files

### Team Access Management
- Go to: `Settings > Collaborators and teams`
- Create teams with proper roles:
  - **Admin**: Full control
  - **Write**: Push & merge code
  - **Read**: View only
- Assign members to appropriate teams

### Key Repository Files
- `README.md`: Project overview, setup, usage, contribution
- `LICENSE`: License information (e.g., MIT, Apache 2.0)
- `.gitignore`: Ignore Django/Python/OS-specific files
- `requirements.txt`: List of Python dependencies
- `.env.example`: Template for environment variables (never commit `.env`)

---

## 4. 🌿 Branch Strategy

### Main Branches
- `main`: Production-ready code
- `develop`: Ongoing development and integration

### Supporting Branches
- `feature/*`: New features (branched from `develop`)
- `bugfix/*`: Fixes for reported bugs (from `develop`)
- `hotfix/*`: Urgent fixes (from `main`)
- `release/*`: Preparation for a new release (from `develop`)

---

## 5. 🔁 Team Workflow

### Daily Workflow

```bash
# Clone the repository
git clone https://github.com/org/project.git

# Create a new feature branch
git checkout -b feature/your-task

# Make changes and commit
git add .
git commit -m "Describe what you changed"

# Push your branch
git push -u origin feature/your-task
```

- Open a **Pull Request (PR)** to merge into `develop`

### Best Practices
- Start your day by syncing with the latest code:
  ```bash
  git checkout develop
  git pull
  git checkout your-feature-branch
  git merge develop  # or: git rebase develop
  ```
- Commit frequently with meaningful messages
- Push regularly to avoid losing work

---

## 6. 🔍 Code Reviews & Pull Requests

- Open a PR once the feature/fix is complete
- Peer review is required:
  - Clean, tested, and well-documented code
- Get approval from required reviewers
- Address all review comments before merging

---

## 7. 📝 Writing Good Docs

### Essential Documentation
- `README.md`: Project overview, installation, and usage
- `CONTRIBUTING.md`: Guidelines for contributing (recommended)
- **API Docs**: Use tools like OpenAPI or Django REST Framework (DRF) Docs
- **In-code Docs**: Use meaningful docstrings and inline comments

### Django-Specific Recommendations
- **Models**: Document fields, choices, and indexes
- **Views**: Describe expected input/output and authentication

---

## 8. 📋 Managing Issues & Tasks

### GitHub Issues
- Use templates for:
  - Bug Reports
  - Feature Requests
  - Documentation Suggestions
- Apply relevant labels:
  - `bug`, `enhancement`, `documentation`, `technical-debt`
- Assign issues to responsible team members

### GitHub Projects (Boards)
- Set up a Project board with columns:
  - `To Do` → `In Progress` → `Review` → `Done`
- Link issues to project cards
- Use **milestones** to group issues by release

---

## 9. 🔐 Security

- Use `.env` files for secrets (never commit actual credentials)
- Store API tokens and keys in secure environments
- Regularly review dependencies (e.g., `pip list --outdated`)
- Enable GitHub’s built-in security tools:
  - `Settings > Code Security and Analysis`

---

## 📘 Additional Reading

The Ultimate GitHub Collaboration Guide

