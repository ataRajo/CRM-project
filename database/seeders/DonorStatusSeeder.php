<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonorStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('donorstatuses')->delete();

        DB::table('donorstatuses')->insert([
            ['status_name' => 'Active'],
            ['status_name' => 'Inactive'],
            // Add more statuses as needed
        ]);
    }
}
