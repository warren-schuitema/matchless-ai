# Security Audit Skill

Use this skill when performing security reviews, identifying vulnerabilities, or hardening the codebase.

## When to Use
- User requests security audit
- Before deploying to production
- When adding authentication/authorization
- When handling sensitive data

## Security Checklist

### Authentication & Authorization
- Check for proper password hashing (bcrypt, argon2)
- Verify JWT token validation and expiration
- Ensure session management is secure
- Look for hardcoded credentials
- Check for proper role-based access control

### API Security
- Validate all user inputs
- Check for SQL injection vulnerabilities
- Verify CORS configuration
- Ensure rate limiting on sensitive endpoints
- Check for proper error handling (no stack traces in production)

### Frontend Security
- Review for XSS vulnerabilities in user-generated content
- Check for CSRF protection
- Verify sensitive data isn't exposed in client-side code
- Review any eval() or innerHTML usage

### Environment & Configuration
- Verify .gitignore includes .env, .env.local
- Check that secrets aren't committed to git
- Ensure DATABASE_URL and API keys are environment variables
- Review production environment configuration

### Dependencies
- Run `npm audit` to check for known vulnerabilities
- Identify outdated packages with security issues
- Suggest updates or alternatives

## Output Format

Provide findings in this structure:

**🔴 CRITICAL (Fix Immediately)**
- Issue description
- Location in code
- Specific fix with code example

**🟡 MEDIUM PRIORITY (Fix Soon)**
- Issue description
- Location in code
- Suggested fix

**🟢 BEST PRACTICES (Recommended)**
- Suggestion
- Why it matters
- Implementation approach

## Example Fixes

### Hardcoded Credentials
```typescript
// ❌ BAD
const apiKey = "sk_live_123456789";

// ✅ GOOD
const apiKey = process.env.API_KEY;
```

### SQL Injection Prevention
```typescript
// ❌ BAD
const query = `SELECT * FROM users WHERE email = '${email}'`;

// ✅ GOOD (with Drizzle)
const user = await db.select().from(users).where(eq(users.email, email));
```