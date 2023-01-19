import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://zjyflpaolyjwqtqknvwy.supabase.co'
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqeWZscGFvbHlqd3F0cWtudnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2MTI5NzMsImV4cCI6MTk4OTE4ODk3M30.Ys7Ji8TwLCsIYbIoezaBC_pUiIgC4rpjQW494knEpAI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})