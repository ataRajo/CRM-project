<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonationType extends Model
{
    use HasFactory;

    protected $table = 'donation_types';
    protected $primaryKey = 'DonationTypeID';
    public $incrementing = true;
    protected $fillable = ['type_name'];
}
