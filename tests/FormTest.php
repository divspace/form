<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class FormTest extends TestCase
{
    public function testForToken()
    {
        $this->visit('/')->see('_token');
    }

    public function testForStylesAndScripts()
    {
        $this->visit('/')
            ->see('modernizr-')
            ->see('vendor-')
            ->see('app-');
    }

    public function testValidJsonResponse()
    {
        $this->json('POST', '/post', [
            'firstName' => 'John',
            'lastName' => 'Doe',
            'emailAddress' => 'jdoe@example.com'
        ])->seeJson([
            'success' => true
        ]);
    }

    public function testInvalidJsonResponse()
    {
        $this->json('POST', '/post', [
            'firstName' => 'John',
            'lastName' => 'Doe',
            'emailAddress' => 'invalidemail'
        ])->seeJson([
            'success' => false
        ]);
    }
}
