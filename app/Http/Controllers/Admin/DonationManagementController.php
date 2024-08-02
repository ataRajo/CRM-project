<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;

class DonationManagementController extends Controller
{
    public function index()
    {
        $donations = Donation::with(['user', 'recipient', 'donationType'])->paginate(10);
        return view('admin.dashboard', compact('donations'));
    }

    public function show($donationId)
    {
        $donation = Donation::with(['user', 'recipient', 'donationType'])->findOrFail($donationId);
        return view('admin.donations.show', compact('donation'));
    }

    public function confirm($donationId)
    {
        $donation = Donation::findOrFail($donationId);
        $donation->update(['status' => 'confirmed']);
        return redirect()->route('admin.donations.index')->with('success', 'Donation confirmed successfully.');
    }

    public function deny($donationId)
    {
        $donation = Donation::findOrFail($donationId);
        $donation->update(['status' => 'denied']);
        return redirect()->route('admin.donations.index')->with('success', 'Donation denied successfully.');
    }

    public function updateStatus(Request $request, $donationId)
    {
        $request->validate([
            'status' => 'required|in:pending,confirmed,denied',
        ]);

        $donation = Donation::findOrFail($donationId);
        $donation->update(['status' => $request->status]);

        return redirect()->route('admin.donations.index')->with('success', 'Donation status updated successfully.');
    }
}
