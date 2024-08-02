<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonorStatusesTable extends Migration
{
    public function up()
    {
        Schema::create('donorstatuses', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('status_name'); // Status name
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('donorstatuses');
    }
}
