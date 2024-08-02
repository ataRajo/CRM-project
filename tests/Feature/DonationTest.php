<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Donation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DonationTest extends TestCase
{
    use RefreshDatabase; // Uncomment this to reset the database for each test

    public function test_user_can_create_donation()
    {
        // Fetch an existing user (you might want to create a user using factory)
        $user = User::factory()->create(); // Use factory to create a test user

        // Simulate user login
        $this->actingAs($user);

        // Create a donation
        $response = $this->postJson('/api/donations', [ // Ensure you use the correct API endpoint
            'recipientID' => 1, // Assuming recipient with ID 1 exists
            'donationTypeID' => 1, // Assuming donation type with ID 1 exists
            'DonationDate' => now(),
            'Amount' => 100.00,
        ]);

        // Assert the donation was created successfully
        $response->assertStatus(201);
        $this->assertDatabaseHas('donations', [
            'userID' => $user->userID,
            'Amount' => 100.00,
        ]);
    }

    public function test_user_can_view_their_donations()
    {
        // Fetch an existing user (you might want to create a user using factory)
        $user = User::factory()->create();

        // Simulate user login
        $this->actingAs($user);

        // Create a donation for the user
        $donation = Donation::create([
            'userID' => $user->userID,
            'recipientID' => 1, // Assuming recipient with ID 1 exists
            'donationTypeID' => 1, // Assuming donation type with ID 1 exists
            'DonationDate' => now(),
            'Amount' => 100.00,
        ]);

        // View donations
        $response = $this->getJson('/api/donations'); // Ensure you use the correct API endpoint

        // Assert the response contains the donation
        $response->assertStatus(200);
        $response->assertJsonFragment(['Amount' => 100.00]); // Check for the correct amount in the response
    }

    public function test_admin_can_view_all_donations()
    {
        // Fetch an existing admin user (you might want to create an admin user using factory)
        $admin = User::factory()->create(['is_admin' => true]); // Create an admin user

        // Simulate admin login
        $this->actingAs($admin);

        // Create a donation for an existing user
        Donation::create([
            'userID' => 2, // Assuming user with ID 2 exists
            'recipientID' => 1, // Assuming recipient with ID 1 exists
            'donationTypeID' => 1, // Assuming donation type with ID 1 exists
            'DonationDate' => now(),
            'Amount' => 100.00,
        ]);

        // View all donations as admin
        $response = $this->getJson('/api/admin/donations'); // Ensure you use the correct API endpoint

        // Assert the response contains the donation
        $response->assertStatus(200);
        $response->assertJsonFragment(['Amount' => 100.00]); // Check for the correct amount in the response
    }

    public function test_admin_can_confirm_donation()
    {
        // Fetch an existing admin user (you might want to create an admin user using factory)
        $admin = User::factory()->create(['is_admin' => true]); // Create an admin user

        // Simulate admin login
        $this->actingAs($admin);

        // Create a donation for an existing user
        $donation = Donation::create([
            'userID' => 2, // Assuming user with ID 2 exists
            'recipientID' => 1, // Assuming recipient with ID 1 exists
            'donationTypeID' => 1, // Assuming donation type with ID 1 exists
            'DonationDate' => now(),
            'Amount' => 100.00,
            'Status' => 'pending',
        ]);

        // Confirm the donation
        $response = $this->patchJson("/api/admin/donations/{$donation->DonationID}/confirm"); // Ensure you use the correct API endpoint

        // Assert the donation status is confirmed
        $response->assertStatus(200);
        $this->assertDatabaseHas('donations', [
            'DonationID' => $donation->DonationID,
            'Status' => 'confirmed',
        ]);
    }
}
