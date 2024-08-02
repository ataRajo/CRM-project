<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Donation;
use Illuminate\Auth\Access\HandlesAuthorization;

class DonationPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return $user->is_admin;
    }

    public function view(User $user, Donation $donation)
    {
        return $user->is_admin || $donation->userID == $user->id;
    }

    public function create(User $user)
    {
        return $user->is_admin || $user->is_user;
    }

    public function update(User $user, Donation $donation)
    {
        return $user->is_admin;
    }

    public function delete(User $user, Donation $donation)
    {
        return $user->is_admin;
    }
}
