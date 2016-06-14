# Form Test

This code sample is built using the following:

- [Bootstrap](http://v4-alpha.getbootstrap.com)
- [Gulp](http://gulpjs.com)
- [Laravel](https://laravel.com)
- [Npm](https://www.npmjs.com)
- [Vue.js](http://vuejs.org)

To test the form out, you can install [Valet](https://laravel.com/docs/5.2/valet) or use the built-in PHP server. Regardless of what you choose, please run the following commands:

```bash
git clone https://github.com/divspace/form
cd form
composer install
npm install
gulp
cp .env.example .env
php artisan key:generate
php artisan migrate
```

## Valet

If you choose this method, change into the `form` directory and run this command:

```bash
valet link
```

You can then access the site by going to:

`http://form.dev`

## PHP Server

Alternatively, you can use the built-in server that PHP has by running this command:

```bash
php artisan serve
```

You can then access the site by going to:

`http://localhost:8000`