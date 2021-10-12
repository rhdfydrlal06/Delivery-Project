export FLASK_APP=delivery_app.app
export FLASK_ENV=production
export DB_USER=[]
export DB_PASSWORD=[]
export DB_NAME=[]
# python -c "import os; print(os.urandom(16))"
export SECRET_KEY=[]

flask db init
flask db migrate
flask db upgrade
nohup gunicorn delivery_app.app:application -b 0.0.0.0:5000 --workers=4 --threads=4 &
