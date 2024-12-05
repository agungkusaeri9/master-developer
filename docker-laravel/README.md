<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Laravel Docker Starter Kit
- Laravel v10.x
- PHP v8.1.x
- MySQL v8.1.x (default)
- phpMyAdmin v5.x
- Node.js v18.x
- NPM v10.x
- Vite v5.x
- Rector v1.x

# Requirements
- Stable version of [Docker](https://docs.docker.com/engine/install/)
- Compatible version of [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

# How To Deploy

### For first time only !
- `git clone [https://github.com/refactorian/laravel-docker.git](https://github.com/agungkusaeri9/WMS-Toho.git)`
- `cd WMS-Toho`
- `docker compose up -d --build`
- `docker compose exec phpmyadmin chmod 777 /sessions`
- `docker compose exec php bash`
- `chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache`
- `chmod -R 775 /var/www/storage /var/www/bootstrap/cache`
- `composer setup`

### From the second time onwards
- `docker compose up -d`

# Notes

### Laravel Versions
- [Laravel 10.x](https://github.com/refactorian/laravel-docker/tree/laravel_10x)

### Laravel App
- URL: http://localhost:9001

### phpMyAdmin
- URL: http://localhost:8080
- Server: `db`
- Username: `wms_toho_staging`
- Password: `wms_toho_staging`
- Database: `wms_toho_staging`
