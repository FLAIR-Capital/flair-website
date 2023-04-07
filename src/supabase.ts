import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhcldfihhxhqgmvvrfix.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoY2xkZmloaHhocWdtdnZyZml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNjgwNDYsImV4cCI6MTk5Mjc0NDA0Nn0.Y5bYC-rPrl1iXzOpxmsS6S-smjcJv-RV5hXDAh8L4xQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
