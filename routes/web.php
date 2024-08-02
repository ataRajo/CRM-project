<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestMail;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\Admin\DonationManagementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
| These routes are loaded by the RouteServiceProvider within a group
| which contains the "web" middleware group. Now create something great!
|
*/

// Home Route
Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Test Email Route
Route::get('/test-email', function () {
    $details = [
        'title' => 'Test Email',
        'body' => 'This is a test email sent from Laravel.'
    ];

    Mail::to('afrot2002@gmail.com')->send(new TestMail($details));

    return 'Email Sent';
});

// Test Session Route
Route::get('/test-session', function (\Illuminate\Http\Request $request) {
    $request->session()->put('test_key', 'test_value');
    return $request->session()->get('test_key');
});

// Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return view('auth.login'); // Display the login form
    })->name('login.form');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('login');

    Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');

    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

// Email Verification Routes
Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify.web');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send.web');

// Logout Route
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// Donation Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/donations/create', [DonationController::class, 'create'])->name('donations.create'); // For the donation form
    Route::post('/donations', [DonationController::class, 'store'])->name('donations.store'); // To store the donation
    Route::get('/donations', [DonationController::class, 'index'])->name('donations.index');
    Route::get('/donations/{donation}', [DonationController::class, 'show'])->name('donations.show');
});

// Admin Routes for Donation Management
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/donations', [DonationManagementController::class, 'index'])->name('admin.donations.index');
    Route::get('/admin/donations/{donation}', [DonationManagementController::class, 'show'])->name('admin.donations.show');
    Route::patch('/admin/donations/{donation}/confirm', [DonationManagementController::class, 'confirm'])->name('admin.donations.confirm');
    Route::patch('/admin/donations/{donation}/deny', [DonationManagementController::class, 'deny'])->name('admin.donations.deny');
    Route::patch('/admin/donations/{donation}/update-status', [DonationManagementController::class, 'updateStatus'])->name('admin.donations.updateStatus');

});
