<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonationsTable extends Migration
{
    public function up()
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id('DonationID'); // Primary Key
            $table->unsignedBigInteger('userID');
            $table->unsignedBigInteger('recipientID');
            $table->unsignedBigInteger('donationTypeID');
            $table->date('DonationDate');
            $table->decimal('Amount', 10, 2);
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
            $table->foreign('recipientID')->references('RecipientID')->on('recipients')->onDelete('cascade');
            $table->foreign('donationTypeID')->references('DonationTypeID')->on('donation_types')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('donations');
    }
}
