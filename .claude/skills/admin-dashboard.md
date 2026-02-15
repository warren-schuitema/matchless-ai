# Admin Dashboard Builder Skill

Use this skill when building admin interfaces, CRUD operations, or internal management tools.

## When to Use
- Building admin panels
- Creating content management systems
- Implementing CRUD operations
- Protected/authenticated routes

## Architecture Principles

### Route Structure
```
/admin
  /login
  /dashboard (protected)
    /blog
      /new
      /edit/:id
    /videos
      /new
      /edit/:id
    /subscribers
    /analytics
```

### Component Organization
```
client/src/
  pages/admin/
    AdminLayout.tsx (sidebar, header)
    Dashboard.tsx (overview with stats)
    BlogManager.tsx (list view)
    BlogEditor.tsx (create/edit form)
    VideoManager.tsx
    SubscriberList.tsx
  components/admin/
    ProtectedRoute.tsx
    Sidebar.tsx
    StatsCard.tsx
    DataTable.tsx
```

### Authentication Flow
1. Login form submits credentials
2. Server validates and returns JWT/session
3. Store token in httpOnly cookie or localStorage
4. ProtectedRoute wrapper checks auth before rendering
5. Redirect to /admin/login if not authenticated

## Database Schema Patterns

For content management, use this structure:
```typescript
// Blog posts
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  authorId: integer('author_id').references(() => users.id),
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Video resources
export const videoResources = pgTable('video_resources', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  videoUrl: text('video_url').notNull(), // YouTube/Vimeo URL
  embedCode: text('embed_code'),
  category: text('category'),
  duration: integer('duration'), // in seconds
  thumbnail: text('thumbnail'),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});
```

## API Endpoint Patterns
```typescript
// RESTful CRUD endpoints
router.get('/api/admin/blog-posts', authenticateAdmin, listBlogPosts);
router.get('/api/admin/blog-posts/:id', authenticateAdmin, getBlogPost);
router.post('/api/admin/blog-posts', authenticateAdmin, createBlogPost);
router.put('/api/admin/blog-posts/:id', authenticateAdmin, updateBlogPost);
router.delete('/api/admin/blog-posts/:id', authenticateAdmin, deleteBlogPost);
router.patch('/api/admin/blog-posts/:id/publish', authenticateAdmin, togglePublish);
```

## UI Components to Build

### DataTable with Actions
- Sortable columns
- Search/filter
- Pagination
- Row actions (edit, delete, publish/unpublish)

### Form Builder
- Use react-hook-form + zod validation
- Rich text editor (TipTap or Slate)
- Image upload with preview
- Draft saving
- Publish scheduling

### Stats Dashboard
- Total posts/videos count
- Recent activity
- Subscriber growth chart
- Most viewed content

## Styling Guidelines

Match the main site design:
- Use same Tailwind config
- Teal/purple gradient accents
- Dark mode by default
- Glassmorphism effects on cards
- Smooth animations on interactions

## Security Considerations

- All admin routes must check authentication
- Validate all inputs on server-side
- Use CSRF tokens for forms
- Implement rate limiting on endpoints
- Log admin actions for audit trail