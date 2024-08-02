@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Request a Donation</h1>
    <form action="{{ route('donations.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="recipientID">Recipient</label>
            <select name="recipientID" id="recipientID" class="form-control">
                @foreach($recipients as $recipient)
                    <option value="{{ $recipient->RecipientID }}">{{ $recipient->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label for="donationTypeID">Donation Type</label>
            <select name="donationTypeID" id="donationTypeID" class="form-control">
                @foreach($donationTypes as $type)
                    <option value="{{ $type->DonationTypeID }}">{{ $type->TypeName }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label for="DonationDate">Donation Date</label>
            <input type="date" name="DonationDate" id="DonationDate" class="form-control">
        </div>
        <div class="form-group">
            <label for="Amount">Amount</label>
            <input type="number" name="Amount" id="Amount" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection
