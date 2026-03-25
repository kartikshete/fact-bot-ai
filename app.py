from flask import Flask, render_template, request, jsonify
import json
import random
import os

app = Flask(__name__)

FACTS_FILE = 'facts.json'

def load_facts():
    if not os.path.exists(FACTS_FILE):
        return ["Welcome to the FactBot! Add some facts to get started."]
    with open(FACTS_FILE, 'r') as f:
        return json.load(f)

def save_facts(facts):
    with open(FACTS_FILE, 'w') as f:
        json.dump(facts, f, indent=4)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-fact')
def get_fact():
    facts = load_facts()
    return jsonify({"fact": random.choice(facts)})

@app.route('/add-fact', methods=['POST'])
def add_fact():
    data = request.json
    new_fact = data.get('fact')
    if not new_fact:
        return jsonify({"error": "No fact provided"}), 400
    
    facts = load_facts()
    facts.append(new_fact)
    save_facts(facts)
    return jsonify({"message": "Fact learned successfully!", "fact": new_fact})

if __name__ == '__main__':
    app.run(debug=True, port=5002)

# Minor update 4
# Minor update 22
# Minor update 29
# Minor update 31
# Minor update 35
# Minor update 36
# Minor update 42