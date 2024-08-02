<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipientsTable extends Migration
{
    public function up()
    {
        Schema::create('recipients', function (Blueprint $table) {
            $table->id('RecipientID');
            $table->string('name');
            $table->string('ContactInfo');
            $table->text('NeedDescription');
            $table->enum('Status', ['pending', 'confirmed', 'denied']);
            $table->string('DocumentsAndEvidence')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('recipients');
    }
}
