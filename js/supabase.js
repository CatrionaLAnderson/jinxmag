import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://autunitllvjblvjsionn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dHVuaXRsbHZqYmx2anNpb25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MzM4ODcsImV4cCI6MjA2NDAwOTg4N30.ToOyrlhFctE2QxIwpj79gQz7-GBaVXmIBl2jsU6d6JA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;


