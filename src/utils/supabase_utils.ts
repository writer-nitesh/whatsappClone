import { supabase } from "./supabase_config";

export async function singIn() {
    const data = supabase.auth.signInWithOAuth({ provider: "google" })
    return data
}
export async function getData() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
} 