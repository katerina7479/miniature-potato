local:
	heroku local

open:
	heroku open

logs:
	heroku logs --tail

push:
	git push heroku master

make-migrate:
	python manage.py makemigrations

migrate:
	heroku run python manage.py migrate

kill:
	heroku repo:purge_cache
	heroku repo:reset
	git push heroku master

watch:
	-pkill -f webpack
	webpack --progress --colors --watch &
