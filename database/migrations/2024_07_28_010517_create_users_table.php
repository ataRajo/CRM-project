<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('userID'); // Primary Key
            $table->string('username')->unique();
            $table->string('password');
            $table->string('UserType'); // e.g., 'donor'
            $table->foreignId('donorstatus_id')->constrained('donorstatuses')->onDelete('cascade');
            $table->foreignId('donorclassification_id')->constrained('donorclassifications')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
