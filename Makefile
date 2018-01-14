local:
	heroku local web

open:
	heroku open

shell:
	pipenv shell -c

logs:
	heroku logs --tail

lock:
	pipenv lock

push:
	git push heroku master
