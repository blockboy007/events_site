import smtplib
import ssl
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)


@app.route('/')
def Index():
    return '< h1 > Hello < h1 >'


@app.route('/email', methods=['POST'])
def email():
    data = request.get_json()
    # name = data['name']
    name = data['name']
    phone = data['phone']
    email = data['email']
    date = data['date']
    event_date = datetime.datetime.strptime(
        date, '%Y-%m-%d').strftime('%m/%d/%y')
    eventType = data['eventType']
    body = data['body']

    from_address = 'iconix0x@gmail.com'
    to_address = 'lukereardon10@gmail.com'
    subject = 'You have a new event connect!'

    content = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nDate: {event_date}\nType of Event: {eventType}\nMessage: {body}"

    msg = EmailMessage()
    msg['From'] = from_address
    msg['to'] = to_address
    msg['subject'] = subject
    msg.set_content(content)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as server:
        server.login(from_address, 'pvmikmfdnytmdnan')
        server.sendmail(from_address, to_address, msg.as_string())

    return jsonify(name, email, phone, date, eventType, body), 200


if __name__ == '__main__':
    app.run(debug=True)
