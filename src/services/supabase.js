import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://smgwyhfnsctdoyxymudl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZ3d5aGZuc2N0ZG95eHltdWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NTg3NTIsImV4cCI6MjAxMDQzNDc1Mn0.gXob9yQpCGRcZmMYpL7J5mZWcSEaZcg9vnhnoSTuKf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
