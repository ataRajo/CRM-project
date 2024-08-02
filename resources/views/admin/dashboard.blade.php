@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
    
    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <table class="min-w-full bg-white border border-gray-300">
        <thead>
            <tr>
                <th class="py-2 border">User</th>
                <th class="py-2 border">Recipient</th>
                <th class="py-2 border">Donation Type</th>
                <th class="py-2 border">Donation Date</th>
                <th class="py-2 border">Amount</th>
                <th class="py-2 border">Status</th>
                <th class="py-2 border">Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($donations as $donation)
                <tr>
                    <td class="border px-4 py-2">{{ optional($donation->user)->username }}</td>
                    <td class="border px-4 py-2">{{ optional($donation->recipient)->name }}</td>
                    <td class="border px-4 py-2">{{ optional($donation->donationType)->TypeName ?? 'N/A' }}</td>
                    <td class="border px-4 py-2">{{ $donation->formatted_donation_date }}</td>
                    <td class="border px-4 py-2">${{ number_format($donation->Amount, 2) }}</td>
                    <td class="border px-4 py-2">{{ ucfirst($donation->status ?? 'N/A') }}</td>
                    <td class="border px-4 py-2">
                        <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                            @csrf
                            @method('PATCH')
                            <select name="status" class="form-control">
                                <option value="pending" @if($donation->status == 'pending') selected @endif>Pending</option>
                                <option value="confirmed" @if($donation->status == 'confirmed') selected @endif>Confirmed</option>
                                <option value="denied" @if($donation->status == 'denied') selected @endif>Denied</option>
                            </select>
                            <button type="submit" class="btn btn-primary mt-2">Update</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Pagination Links -->
    <div class="mt-4">
        {{ $donations->links() }}
    </div>
</div>
@endsection
