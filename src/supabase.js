import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const piezasSupabaseUrl = import.meta.env.VITE_PIEZAS_URL
const piezasSupabaseKey = import.meta.env.VITE_PIEZAS_PUBLISHABLE_KEY

export const mensajeConfiguracionSupabase =
  'Faltan las variables de entorno de Supabase: VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY.'
export const supabaseConfigurado = Boolean(supabaseUrl && supabaseAnonKey)
export const piezasSupabaseConfigurado = Boolean(piezasSupabaseUrl && piezasSupabaseKey)
export const mensajeConfiguracionPiezas =
  'Faltan las variables de entorno para Piezas: VITE_PIEZAS_URL y/o VITE_PIEZAS_PUBLISHABLE_KEY.'

export const supabase = supabaseConfigurado
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const supabasePiezas = piezasSupabaseConfigurado
  ? createClient(piezasSupabaseUrl, piezasSupabaseKey)
  : null

