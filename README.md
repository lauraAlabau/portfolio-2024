# Portfolio 2024

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.laura-alabau.com)](https://www.laura-alabau.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-97.4%25-blue)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-1.1%25-yellow)](#)

## Description

This is my personal website showcasing my work, skills, and projects. Developed with React and TypeScript, the site is deployed using Vercel for optimal performance and reliability.

## Features

- **About Me**: Information about my background, experience, and interests.
- **Projects**: A collection of my recent and notable projects.
- **Skills**: A detailed list of my technical skills and competencies.
- **Contact**: Ways to get in touch with me.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Installation

This project is not intended for general installation or use. It is a personal website and not open for public collaboration.

## Dependency security

Use Node.js 20.19+ or 22.12+ for the current Vite 7 toolchain.

Install and validate the exact dependency versions committed in the lockfile:

```sh
npm ci --ignore-scripts
npm audit
npm run format:check
npm run test:ci
npm run build
```

CI runs these checks, including an audit of development dependencies. Build and
test dependencies can affect developer machines and CI even when the deployed
site is static. Keep Vite and Vitest development servers local; do not expose
them to untrusted networks.

For security updates, update the affected direct dependency and its transitive
dependencies, commit both `package.json` and `package-lock.json`, and rerun the
checks above. Do not use `npm audit fix --force` without reviewing breaking
changes. A clean audit only covers vulnerabilities known to the registry at the
time of the check; it is not a guarantee that no vulnerabilities exist.

Dependabot evaluates the default branch. After merging a fix, check the alert's
affected version range against that branch's lockfile and allow GitHub to
reprocess it. Do not dismiss an alert merely because a PR cannot be generated or
the vulnerable package is a development dependency. If an alert remains open,
inspect its update error and the recent Dependabot update job logs before
considering a documented, evidence-based dismissal.

## License

This project is for personal use only and is not open for contributions. Please respect the usage guidelines.

## Contact

Laura Alabau - [LinkedIn](https://www.linkedin.com/in/lauraalabau/) 

Visit my website at [www.laura-alabau.com](https://www.laura-alabau.com)
