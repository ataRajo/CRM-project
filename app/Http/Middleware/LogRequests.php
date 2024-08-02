<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LogRequests
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
        // Log the request URL and method
        \Log::info('Custom Middleware Activated', [
            'url' => $request->url(),
            'method' => $request->method(),
        ]);

        return $next($request);
    }
}
