// 請替換為您 Supabase 專案的真實數值  
const SUPABASE_URL = 'https://eyjzizaoanzxsauugftd.supabase.co';  
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5anppemFvYW56eHNhdXVnZnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NDM0MTgsImV4cCI6MjEwMDAxOTQxOH0.M4JfsG0p-fXh6KVf8U_ah_Oe84uW9lyCpjI48tinzj0';  
  
// 建立全局 Supabase 客戶端實例  
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);  
