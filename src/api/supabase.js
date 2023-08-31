import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qarthqxfkqrskliudkym.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcnRocXhma3Fyc2tsaXVka3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NjUwODksImV4cCI6MjAwODU0MTA4OX0.671f5Bu4TdRvy9UHQxvvdYgSBKrf1CgJRvDI3gkzEXw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
