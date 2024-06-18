from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/members')
def members():
    data = {"name": "katelyn", "status": "pretty"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001,debug=True)
