import os
import time
import json
import binascii
import logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S',
                    filename='log/myapp.log',
                    filemode='a')
# mongodb数据库
import pymongo
# flask模板
from flask import Flask, request, render_template, redirect, url_for, escape, session, jsonify
from gevent import monkey
from gevent.pywsgi import WSGIServer
monkey.patch_all()
app = Flask(__name__)
app.config['DEBUG'] = True
app.secret_key = os.urandom(12)


#进入首页
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')


@app.route('/message', methods=['POST'])
def AddMessage():
    name = request.form['name']
    phone = request.form['phone']
    try:
        client = pymongo.MongoClient('127.0.0.1', 27017)
        db = client['mao']
        collection = db['message']
        objid = str(collection.insert_one(
            {'name': name, 'phone': phone}).inserted_id)
        logging.info('success add ' + objid)        
    except Exception as e:
        logging.error(e)
    return jsonify({'status':200})
@app.route('/success',methods=['GET'])
def callback():
    return render_template('success.html')
if __name__ == '__main__':

    http_server=WSGIServer(('0.0.0.0',8080),app)

    print('yiqidong')
    http_server.serve_forever()
