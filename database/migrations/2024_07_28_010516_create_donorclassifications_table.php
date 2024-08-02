<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonorclassificationsTable extends Migration
{
    public function up()
    {
        Schema::create('donorclassifications', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('classification_name'); // Classification name
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('donorclassifications');
    }
}
