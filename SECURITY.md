# Security Policy

## Supported Versions

We actively support the following versions of Lean DS with security updates:

| Version | Supported          | Status |
| ------- | ------------------ | ------ |
| 1.7.x   | :white_check_mark: | Current stable release |
| 1.6.x   | :white_check_mark: | Security fixes only |
| < 1.6   | :x:                | No longer supported |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

### How to Report

If you discover a security vulnerability in Lean DS, please report it to us privately:

1. **Email**: ajay@carelon.com
2. **Subject**: `[SECURITY] Lean DS Vulnerability Report`
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
   - Your contact information

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 5 business days
- **Status Updates**: Every 7 days until resolved
- **Resolution Timeline**: 
  - Critical: 7 days
  - High: 30 days
  - Medium: 60 days
  - Low: 90 days

### Disclosure Policy

- We follow **coordinated disclosure**
- Security fixes are released as soon as possible
- CVE IDs are assigned for significant vulnerabilities
- Public disclosure occurs after patch is available
- Credit is given to reporters (unless anonymity is requested)

## Security Measures

### What We Do

✅ **Dependency Scanning**
- Automated npm audit in CI/CD
- Dependabot for vulnerability alerts
- Regular dependency updates

✅ **Code Security**
- CodeQL static analysis
- ESLint security rules
- Manual code reviews

✅ **Access Control**
- Private JFrog Artifactory registry
- 2FA required for package publishing
- Signed commits and releases

✅ **Supply Chain Security**
- npm provenance enabled
- Reproducible builds
- Dependency pinning

✅ **No Data Collection**
- Client-side only components
- No external API calls
- No telemetry or analytics

### What We Don't Do

❌ We do NOT:
- Collect user data or PII
- Make external network requests
- Store credentials or secrets
- Include backend logic or APIs

## Security Best Practices for Users

### Installation

```bash
# Always verify package integrity
npm install @ajaysoni7832/lean-ids-components --verify-signatures

# Use package-lock.json for reproducible installs
npm ci
```

### Content Security Policy (CSP)

If using Lean DS in a web application, configure CSP headers:

```
Content-Security-Policy: 
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  script-src 'self';
  img-src 'self' data:;
  font-src 'self' data:;
```

**Note**: `'unsafe-inline'` is required for styled-components. Consider using nonce-based CSP for production.

### Dependency Management

```bash
# Audit your dependencies regularly
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Check for outdated packages
npm outdated
```

### Secure Usage

```tsx
// ✅ GOOD: Use components as intended
import { InputField } from '@ajaysoni7832/lean-ids-components';

<InputField 
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

// ❌ BAD: Don't inject unsanitized HTML
<InputField dangerouslySetInnerHTML={{ __html: userInput }} />
```

## Known Security Considerations

### styled-components

- Requires `'unsafe-inline'` in CSP
- Consider using nonce-based CSP in production
- See: https://styled-components.com/docs/advanced#security

### React XSS Protection

- React escapes content by default
- Avoid `dangerouslySetInnerHTML` with user input
- Sanitize HTML if absolutely necessary (use DOMPurify)

### Third-Party Dependencies

We use the following trusted dependencies:
- `react` - UI framework
- `styled-components` - CSS-in-JS
- `@mui/icons-material` - Icon library
- `date-fns` - Date utilities

All dependencies are regularly audited and updated.

## Security Updates

Security updates are released as:
- **Patch versions** (1.7.x) for minor fixes
- **Minor versions** (1.x.0) for moderate issues
- **Major versions** (x.0.0) for breaking security changes

Subscribe to releases on GitHub to stay informed:
- https://github.com/ajaysonicarelon/Lean-IDS/releases

## Compliance

### Accessibility
- WCAG 2.1 AA compliant
- Regular accessibility audits

### Licensing
- MIT License for packages
- All dependencies are MIT/Apache/BSD licensed
- No GPL or copyleft dependencies

### Privacy
- No data collection
- No cookies or tracking
- No external requests

## Security Checklist for Contributors

Before submitting a PR, ensure:

- [ ] No hardcoded secrets or credentials
- [ ] No `console.log` with sensitive data
- [ ] Dependencies are up to date (`npm audit`)
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] No `eval()` or `Function()` constructors
- [ ] Input validation for all user inputs
- [ ] Proper error handling (no stack traces in production)
- [ ] ARIA attributes for accessibility
- [ ] Tests include security scenarios

## Contact

- **Security Issues**: ajay@carelon.com
- **General Questions**: https://github.com/ajaysonicarelon/Lean-IDS/discussions
- **Bug Reports**: https://github.com/ajaysonicarelon/Lean-IDS/issues

## Acknowledgments

We thank the following security researchers for responsible disclosure:

_(No reports yet)_

---

**Last Updated**: July 28, 2026  
**Version**: 1.0.0
