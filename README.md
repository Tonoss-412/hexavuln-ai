# HexaVuln AI

## Overview
**HexaVuln AI** is an AI-assisted security research workspace designed for penetration testers, bug bounty researchers, and AppSec teams. It acts as a reasoning layer for analyzing technical evidence and generating actionable security reports.

## Product Features
- **Evidence Correlation:** Upload HTTP requests, responses, code snippets, and logs.
- **Claude AI Analysis:** Leverages Anthropic's Claude to identify vulnerabilities, root causes, and affected components (Currently running in Demo AI Mode).
- **Human-in-the-Loop:** Designed to assist researchers, requiring manual validation for all findings before producing reports.
- **Report Generation:** Generates comprehensive Markdown reports containing severity reasoning, remediation guidance, and reproduction steps.

## Architecture
- **Frontend:** Vanilla HTML/CSS/JS for high performance and lightweight deployment.
- **Backend/AI:** Client-side Demo Provider (ready to be swapped with server-side AnthropicProvider once API access is granted).
- **Hosting:** Static deployment compatible with GitHub Pages or Cloudflare Pages.

```
HexaVuln/
├── index.html        # Landing Page
├── assets/           # Global styles and scripts
└── app/              # Protected Workspace SPA
    ├── index.html    # Dashboard & Research Views
    └── js/app.js     # State management & AI Provider Adapter
```

## Setup
1. Clone the repository: `git clone https://github.com/USERNAME/hexavuln-ai.git`
2. Open `index.html` in your browser, or serve it using a local web server (e.g., `npx serve .` or `python -m http.server`).
3. No build steps are required.

## Security
- **No Remote Code Execution:** The application does not execute uploaded files or payloads.
- **Client-Side Secrets:** Currently operates in Demo Mode. Real API integrations will utilize a secure backend to proxy Claude API requests.
- **Stateless Analysis:** Evidence is processed statelessly.

## Evaluation
Synthetic test cases (such as IDOR, XSS, SSRF) are used to benchmark the reasoning capabilities. See `evaluation/README.md` for details.

## Roadmap
- [x] MVP Dashboard & Demo AI Mode
- [ ] Server-side Anthropic API Integration
- [ ] Export to PDF & Jira integration
- [ ] Advanced Context Engineering for source code analysis

## License
MIT License
