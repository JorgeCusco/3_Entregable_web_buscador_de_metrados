import os, httpx

def load_env():
    env_vars = {}
    with open('./.env.local', 'r') as f:
        for line in f:
            if '=' in line:
                k, v = line.strip().split('=', 1)
                env_vars[k] = v.replace('"', '').replace("'", "")
    return env_vars

env = load_env()
url = f"{env['VITE_SUPABASE_URL']}/rest/v1/metrados?id=not.is.null"
headers = {
    'apikey': env['VITE_SUPABASE_ANON_KEY'],
    'Authorization': 'Bearer ' + env['VITE_SUPABASE_ANON_KEY'],
    'Content-Range': '0-999' # Just in case
}

print(f"Wiping data from: {url}")
res = httpx.delete(url, headers=headers)
print(f"Delete Status: {res.status_code}")
if res.status_code not in [200, 204]:
    print(f"Error: {res.text}")
