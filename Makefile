local:
	heroku local web

open:
	heroku open

shell:
	pipenv shell

logs:
	heroku logs --tail

lock:
	pipenv lock

push:
	git push heroku master

config:
	heroku config

list-addons:
	heroku addons

make-migrate:
	python manage.py makemigrations

migrate:
	heroku run python manage.py migrate
