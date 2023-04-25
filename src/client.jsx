import { createClient } from '@supabase/supabase-js';

const URL = 'https://vobxfovgedayyaelnrni.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvYnhmb3ZnZWRheXlhZWxucm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzODU1NjksImV4cCI6MTk5Nzk2MTU2OX0.yx5ZsBGt6GtC_LXyjEQIe11tUzgbn_C48eDzrGMKjog';

export const supabase = createClient(URL, API_KEY);