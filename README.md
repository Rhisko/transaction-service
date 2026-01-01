# Transaction Service (Node.js + Fastify) — DevSecOps Security Testbed

## Overview
This repository provides a minimal Node.js backend service built with Fastify.
It is intentionally vulnerable and used exclusively for DevSecOps security
automation and advisory validation.

⚠️ Not for production use.

## Endpoints
| Method | Path | Description |
|---|---|---|
| GET | /health | Health check |
| POST | /transaction | Dummy transaction processing |

## Intentional Vulnerabilities
- Hardcoded secret token
- Use of eval()
- Missing input validation
- Vulnerable dependency (lodash)
- Debug logging enabled
- HTTP only (no TLS)
- Container runs as root

## Run Locally
```bash
npm install
npm start
