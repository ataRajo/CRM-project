<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Register services here if needed
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Set default string length for migrations
        Schema::defaultStringLength(191);

        // Example of using a view composer
        view()->composer('*', function ($view) {
            // Share data to all views
            $view->with('appName', config('app.name'));
        });
    }
}
