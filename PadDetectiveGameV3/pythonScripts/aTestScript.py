import sys
import os
import json


parameter = sys.argv[1]

result = "lampje " + parameter + " €8,50 was subtracted from you bank account, have a nice journey <(-0__0-)>"

print(json.dumps(result))