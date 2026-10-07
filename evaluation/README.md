# Evaluation Framework

To ensure the reliability and safety of the Claude reasoning layer within HexaVuln AI, we use synthetic test cases covering common vulnerability classes.

## Synthetic Test Cases

We evaluate against 10 public/synthetic vulnerabilities:
1. XSS (Cross-Site Scripting)
2. SQL injection
3. SSRF (Server-Side Request Forgery)
4. IDOR/BOLA (Insecure Direct Object Reference)
5. Authentication weakness
6. Authorization weakness
7. Insecure deserialization
8. Command injection
9. Path traversal
10. Sensitive data exposure

*Note: All test data is purely synthetic. No private bug bounty target data is used.*

## Metrics
- **Classification:** Not yet measured
- **Severity consistency:** Not yet measured
- **Evidence grounding:** Not yet measured
- **Hallucination rate:** Not yet measured
- **Report completeness:** Not yet measured
- **Remediation quality:** Not yet measured

*(Note: Production Claude API integration is pending, so live benchmarking is not yet formally measured.)*
