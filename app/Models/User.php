<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'userID';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'UserType',
        'donorstatus_id',
        'donorclassification_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the donor status associated with the user.
     */
    public function donorStatus()
    {
        return $this->belongsTo(DonorStatus::class, 'donorstatus_id');
    }

    /**
     * Get the donor classification associated with the user.
     */
    public function donorClassification()
    {
        return $this->belongsTo(DonorClassification::class, 'donorclassification_id');
    }

    /**
     * Check if the user is an admin.
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->UserType === 'admin';
    }

    /**
     * Override the save method to handle default values for donorstatus_id and donorclassification_id for admin users.
     *
     * @param array $options
     * @return bool
     */
    public function save(array $options = [])
    {
        if ($this->isAdmin()) {
            // Assign default values or handle these fields differently for admin users
            $defaultDonorStatusId = 3; // Default value for donorstatus_id
            $defaultDonorClassificationId = 3; // Default value for donorclassification_id

            $this->donorstatus_id = $this->donorstatus_id ?? $defaultDonorStatusId;
            $this->donorclassification_id = $this->donorclassification_id ?? $defaultDonorClassificationId;
        }

        return parent::save($options);
    }
}
