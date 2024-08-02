<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipient extends Model
{
    use HasFactory;

    protected $table = 'recipients'; // Specify the table name
    protected $primaryKey = 'RecipientID'; // Specify the primary key
    public $incrementing = true; // Indicate that the primary key is auto-incrementing
    protected $fillable = ['name', 'ContactInfo', 'NeedDescription', 'Status', 'DocumentsAndEvidence']; // Define fillable fields

    // You can also define relationships here if needed
}
