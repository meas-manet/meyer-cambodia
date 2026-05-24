# Meyer Cambodia CMS - Supabase Setup Guide

## Prerequisites
- Supabase CLI installed (`npm install -g supabase`)
- A Supabase project created at [supabase.com](https://supabase.com)

## Setup Steps

### 1. Link to your Supabase project
```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
```

### 2. Push migrations to database
```bash
supabase db push
```

This will apply all migrations in `supabase/migrations/` folder:
- `20241214_001_create_cms_tables.sql` - Creates tables and functions
- `20241214_002_create_rls_policies.sql` - Creates RLS security policies
- `20241214_003_create_storage.sql` - Creates image storage bucket

### 3. Configure Environment Variables
Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### 4. Create First Admin User

1. Sign up through the app at `/auth`
2. Find your user ID:
```sql
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';
```

3. Add admin role:
```sql
INSERT INTO public.user_roles (user_id, role) 
VALUES ('YOUR_USER_UUID', 'admin');
```

Or use this shortcut:
```sql
INSERT INTO public.user_roles (user_id, role) 
SELECT id, 'admin' FROM auth.users WHERE email = 'your-admin-email@example.com';
```

### 5. Enable Email Auto-Confirm (for development)
In Supabase Dashboard → Authentication → Settings:
- Disable "Enable email confirmations"

## Database Schema

### Tables
| Table | Description |
|-------|-------------|
| `profiles` | User profile data |
| `user_roles` | Admin/user role assignments |
| `home_content` | Hero section content |
| `products` | Product catalog |
| `services` | Services list |

### Storage Buckets
| Bucket | Description |
|--------|-------------|
| `cms-images` | Product and hero images |

## Admin CMS Routes
- `/auth` - Login/Signup
- `/admin` - Home content management
- `/admin/products` - Product catalog
- `/admin/services` - Services management
