import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';


const supabaseUrl = 'https://btmbpbllhmhgegzshwzi.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0bWJwYmxsaG1oZ2VnenNod3ppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDkyODg0NiwiZXhwIjoyMDQ2NTA0ODQ2fQ.hH06StOWCi7r33m4XbET7XaDEJoiXPDFeV7prt83TaQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


