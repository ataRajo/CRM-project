<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;
use App\Models\User;
use Illuminate\Auth\Events\Verified;

class VerifyEmailController extends Controller
{
    public function __invoke(EmailVerificationRequest $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(config('app.frontend_url') . RouteServiceProvider::HOME . '?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended(config('app.frontend_url') . RouteServiceProvider::HOME . '?verified=1');
    }

    public function generateVerificationLink($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $verificationUrl = URL::temporarySignedRoute(
            'verification.verify.api',
            Carbon::now()->addMinutes(60),
            ['id' => $user->getKey()]
        );

        $hash = sha1($user->email);
        $verificationUrlWithHash = "{$verificationUrl}/{$hash}";

        return response()->json(['verification_url' => $verificationUrlWithHash]);
    }
}
