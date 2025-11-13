import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

let client: SupabaseClient | null = null

export const getSupabaseServerClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Supabase credentials are missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in your env.')
    }
    return null
  }

  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  }

  return client
}

