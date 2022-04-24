# 
# Start & Stop Services
#
up:
	docker-compose up

down:
	docker-compose down

up-recreate:
	docker-compose up --force-recreate

restart:
	docker-compose restart

clean-instalation:
	rm -fr node_modules package-lock.json && docker-compose rm --force