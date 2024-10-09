<?php

use App\Http\Controllers\Api\PersonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/persons', [PersonController::class,'index']); // GET - 127.0.0.1:8000/persons
Route::get('/persons/{person}', [PersonController::class,'show']); // GET - 127.0.0.1:8000/persons/1
Route::post('/persons', [PersonController::class,'store']); // POST - 127.0.0.1:8000/persons
Route::put('/persons/{person}', [PersonController::class,'update']); // PUT - 127.0.0.1:8000/persons/1
Route::delete('/persons/{person}', [PersonController::class,'destroy']); // DELETE - 127.0.0.1:8000/persons/1
