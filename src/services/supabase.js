import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gfzuszbnjkbzfqtdygjo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmenVzemJuamtiemZxdGR5Z2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NzEzMTgsImV4cCI6MjAwNDI0NzMxOH0.UB7ogpf3-B3WMytBksiJAhm0KjsBg6v9iZhalB3Rhe8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
