build:
	npm run build
deploy:
	rm -rf /var/www/build
	cp -r build /var/www/
	nginx -s reload