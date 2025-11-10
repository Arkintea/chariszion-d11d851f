import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://tqktasnwdozhchmaaqvs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxa3Rhc253ZG96aGNobWFhcXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2Nzc5NTMsImV4cCI6MjA3ODI1Mzk1M30.44d4mx6lcL__zALKzv5BZGFXlZNbhUKe-Wt912lBFCs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
