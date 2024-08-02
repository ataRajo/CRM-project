<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureUserIsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Assuming 'UserType' is the column that distinguishes admin users
        if (Auth::check() && Auth::user()->UserType === 'admin') {
            return $next($request);
        }

        // Redirect to homepage or show a 403 Forbidden page if not admin
        return redirect('/')->with('error', 'You do not have admin access.');
    }
}
