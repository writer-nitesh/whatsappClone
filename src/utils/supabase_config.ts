import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(
    'https://vylzrqxbislsglqslihv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bHpycXhiaXNsc2dscXNsaWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI2MDMsImV4cCI6MjAyNjczODYwM30.0tI2qVDK6P24EujOvb0LLJYNIz9SWTrmBju_gFAFhKA'
)