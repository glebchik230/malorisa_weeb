// config.js — подключение Supabase
const SUPABASE_URL = 'https://jmsqhicputuowgmgrfjo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptc3FoaWNwdXR1b3dnbWdyZmpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzAzNDg0MywiZXhwIjoyMDY4NjEwODQzfQ.q1nhYlKpu1zhbq9Q7SVZIj0ZynofdOKzlXyNqLd-AS4';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
