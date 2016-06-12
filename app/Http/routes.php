<?php

use App\User;
use Illuminate\Http\Request;

Route::get(null, function () {
    return view('home');
});

Route::post('post', 'PostController@store');
