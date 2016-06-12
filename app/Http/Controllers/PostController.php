<?php

namespace App\Http\Controllers;

use Validator;
use App\User;
use App\Http\Requests;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|min:2|max:100',
            'lastName' => 'required|min:2|max:100',
            'emailAddress' => 'required|min:3|max:254|email'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        User::create([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email_address' => $request->emailAddress
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Record created'
        ], 200);
    }
}
