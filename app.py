from flask import Flask, render_template, redirect, url_for, request
from flask_cors import cross_origin

app = Flask(__name__)

import json
from apis import time_api
api_j = json.dumps(time_api)

@app.route('/')
def index_p():
    return render_template('index.html')

@app.route('/time', methods = ['POST', 'GET'])
@cross_origin()
def apitime():
    return api_j

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(port=5000)