import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://bwdqeisctfjhngdymvce.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZHFlaXNjdGZqaG5nZHltdmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MjI4ODYsImV4cCI6MjA1MTk5ODg4Nn0.2_0EqjXPBhAoU4xdNRGqI0fJLQdF6e1x2jBwZm9fNSY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
