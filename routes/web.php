<?php

use App\Http\Controllers\BranchController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home', ['data' => 'some data']);

Route::resource('branches', BranchController::class);
