#!/bin/sh

cd /var/www/html 

cp .env.example .env

sed -i 's/DB_HOST=.*/DB_HOST=pgsql/g' .env 
sed -i 's/DB_USERNAME=.*/DB_USERNAME=root/g' .env
sed -i 's/DB_PASSWORD=.*/DB_PASSWORD=L3z8lqWBA5a3YqsBqSXMWr5NhnvC20j8/g' .env
sed -i 's/DB_PORT=.*/DB_PORT=5432/g' .env 
DATABASE_URL

rm -rf Modules/*
rm composer.lock
 
composer install --no-interaction

composer require mybizna/account --no-interaction

if [ -f /var/www/html/entrypoint-composers.sh ]; then
    chmod +x /usr/local/bin/entrypoint.sh
    /bin/sh /var/www/html/entrypoint-composers.sh
fi

php artisan key:generate

php artisan migrate --force

php artisan serve 
