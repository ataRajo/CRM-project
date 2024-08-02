<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Donation extends Model
{
    use HasFactory;

    // Define which attributes can be mass-assigned
    protected $fillable = [
        'userID',
        'recipientID',
        'donationTypeID',
        'donation_date', // Make sure to use snake_case
        'Amount', // Use the exact casing as in the database
        'status',
    ];

    protected $primaryKey = 'DonationID'; // Specify the primary key
    public $incrementing = true; // Indicate that the primary key is auto-incrementing
    protected $keyType = 'int'; // Specify the key type

    protected $dates = ['donation_date']; // Define dates for Carbon manipulation

    public function user()
    {
        return $this->belongsTo(User::class, 'userID'); // Define the relationship
    }

    public function recipient()
    {
        return $this->belongsTo(Recipient::class, 'recipientID'); // Define the relationship
    }

    public function donationType()
    {
        return $this->belongsTo(DonationType::class, 'donationTypeID'); // Define the relationship
    }

    public function getFormattedDonationDateAttribute()
    {
        return Carbon::parse($this->donation_date)->format('Y-m-d'); // Format the donation date
    }
}
