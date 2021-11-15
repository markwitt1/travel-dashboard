import { supabaseDataProvider } from "ra-supabase";
import { supabase } from "./supabase";

const resources = {
  posts: ["id", "title", "body", "author_id", "date"],
  authors: ["id", "full_name"],
};

export const dataProvider = supabaseDataProvider(supabase, resources);
