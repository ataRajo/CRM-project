<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonorClassificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('donorclassifications')->delete(); // Use delete instead of truncate

        DB::table('donorclassifications')->insert([
            ['classification_name' => 'Regular'],
            ['classification_name' => 'Occasional'],
            // Add more classifications as needed
        ]);
    }
}
