# backend/main.py
import sys, json
print(json.dumps({"args": sys.argv[1:]}))
