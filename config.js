// Supabase Configuration
const SUPABASE_URL = 'https://piuhtwlsxwvqheykcrxr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdWh0d2xzeHd2cWhleWtjcnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMTg4ODksImV4cCI6MjA4NjU5NDg4OX0.ADgMTlswVTbC90eeGHO3jlfIuLS9ouxSbcq834yltvY';

// Initialize Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
