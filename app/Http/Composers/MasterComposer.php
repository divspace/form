<?php

namespace App\Http\Composers;

use Illuminate\Contracts\View\View;

class MasterComposer
{
    public function compose(View $view)
    {
        $view->with([
            'firstName' => 'Kyle',
            'lastName' => 'Anderson',
            'pageTitle' => 'Form Test'
        ]);
    }
}
