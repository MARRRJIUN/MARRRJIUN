import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.https//csjvasfkkodfubczrykw.supabase.co; 
const supabaseKey = import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzanZhc2Zra29kZnViY3pyeWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjkyNjIsImV4cCI6MjA2ODg0NTI2Mn0.USqqinKNmkLvV8x7xdnfJ1rC6nKbhBG8h_OPQPlTon8;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL:", supabaseUrl);
  console.error("Supabase Anon Key:", supabaseKey);
  throw new Error("Supabase URL and Anon Key are required. Check your .env file and ensure they are prefixed with VITE_ and the dev server was restarted.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);