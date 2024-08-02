<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use App\Models\Recipient;
use App\Models\DonationType;
use Illuminate\Support\Facades\Auth;

class DonationController extends Controller
{
    // Displays the donation request form
    public function create()
    {
        $recipients = Recipient::all();
        $donationTypes = DonationType::all();
        return view('donations.request', compact('recipients', 'donationTypes'));
    }

    // Handles storing a new donation request
    public function store(Request $request)
    {
        $request->validate([
            'recipientID' => 'required|exists:recipients,RecipientID',
            'donationTypeID' => 'required|exists:donation_types,DonationTypeID',
            'DonationDate' => 'required|date',
            'Amount' => 'required|numeric',
        ]);

        Donation::create([
            'userID' => Auth::id(),
            'recipientID' => $request->recipientID,
            'donationTypeID' => $request->donationTypeID,
            'DonationDate' => $request->DonationDate,
            'Amount' => $request->Amount,
        ]);

        return redirect()->back()->with('status', 'Donation request submitted successfully!');
    }

    // Displays all donations
    public function index()
    {
        $donations = Donation::with('user', 'recipient', 'donationType')->get();
        return view('donations.index', compact('donations'));
    }

    // Displays a specific donation
    public function show($id)
    {
        $donation = Donation::with('user', 'recipient', 'donationType')->findOrFail($id);
        return view('donations.show', compact('donation'));
    }

    // Displays the admin dashboard with all donations
    public function adminDashboard()
    {
        $donations = Donation::with('user', 'recipient', 'donationType')->get();
        return view('admin.dashboard', compact('donations'));
    }

    // Updates the status of a donation
    public function updateDonationStatus($id, Request $request)
    {
        $donation = Donation::findOrFail($id);
        $donation->status = $request->status;
        $donation->save();

        return redirect()->back()->with('status', 'Donation status updated successfully!');
    }
}
