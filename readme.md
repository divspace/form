# Form Test

This code sample is built using the following:

- [Bootstrap](http://v4-alpha.getbootstrap.com)
- [Gulp](http://gulpjs.com)
- [Laravel](https://laravel.com)
- [Npm](https://www.npmjs.com)
- [Vue.js](http://vuejs.org)

To test the form out, first install [Valet](https://laravel.com/docs/5.2/valet) then run the following commands:

```bash
git clone https://github.com/divspace/form
cd form
composer install
npm install
gulp
cp .env.example .env
php artisan key:generate
php artisan migrate
valet link
```

You can then access the site by going to:

`http://form.dev`