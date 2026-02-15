# Database Setup Skill

Use this skill for PostgreSQL/Drizzle ORM tasks, migrations, and schema design.

## When to Use
- Setting up new databases
- Creating/modifying schemas
- Running migrations
- Seeding data

## Quick Setup Checklist

1. **Get Neon Database Connection**
   - Create account at neon.tech
   - Create new project
   - Copy connection string (format: postgresql://user:pass@host/db?sslmode=require)

2. **Configure Environment**
```bash
   # .env file
   DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
```

3. **Update Schema** (shared/schema.ts)
   
4. **Push Schema to Database**
```bash
   npm run db:push
```

## Migration Commands
```bash
# Generate migration from schema changes
npx drizzle-kit generate:pg

# Push schema directly (development)
npm run db:push

# View current schema
npx drizzle-kit introspect:pg
```

## Common Schema Patterns

### Timestamps
Always include created/updated timestamps:
```typescript
createdAt: timestamp('created_at').defaultNow(),
updatedAt: timestamp('updated_at').defaultNow(),
```

### Soft Deletes
For content that shouldn't be hard-deleted:
```typescript
deletedAt: timestamp('deleted_at'),
```

### Relations
```typescript
// One-to-many
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  authorId: integer('author_id').references(() => users.id),
});

// Define relation
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));
```

## Seed Data Example
```typescript
// db/seed.ts
import { db } from './index';
import { users, blogPosts } from '@shared/schema';
import bcrypt from 'bcryptjs';

async function seed() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const [admin] = await db.insert(users).values({
    email: 'warren@matchless-marketing.com',
    password: hashedPassword,
    role: 'admin',
  }).returning();

  // Create sample blog posts
  await db.insert(blogPosts).values([
    {
      title: 'Getting Started with AI Automation',
      slug: 'getting-started-ai-automation',
      content: '...',
      authorId: admin.id,
      published: true,
    },
  ]);
}

seed();
```
```

### Option 2: Use Claude Code's Built-in Skills

Claude Code has some built-in skills you can reference. To see what's available:

**In Claude Code, ask:**
```
What skills do you have available? Show me the frontend-design skill and any others that might help with building a React admin dashboard.
```

The `frontend-design` skill is particularly useful for your admin dashboard - it helps create polished, production-quality interfaces.

## How to Use Skills in Your Prompts

Once skills are created, reference them explicitly:
```
Using the security-audit skill, please perform a comprehensive security review of this codebase. Focus on authentication vulnerabilities and API security.
```

Or:
```
Using the admin-dashboard skill, let's build the blog post management interface. Start with the database schema, then the API endpoints, then the frontend components.
```

Or let Claude Code decide:
```
I need to build an admin login system with JWT authentication. Use the appropriate skills to guide this implementation.