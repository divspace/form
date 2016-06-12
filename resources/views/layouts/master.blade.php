<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $pageTitle }} | {{ $firstName }} {{ $lastName }}</title>
        <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
        @stack('styles')
        <!--[if lt IE 9]>
            <script src="{{ elixir('js/ie.js') }}"></script>
        <![endif]-->
    </head>
    <body>
        @yield('content')
        <script src="{{ elixir('js/modernizr.js') }}"></script>
        <script src="{{ elixir('js/vendor.js') }}"></script>
        <script src="{{ elixir('js/app.js') }}"></script>
        @stack('scripts')
    </body>
</html>
