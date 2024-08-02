<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donations</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-4">Donations List</h1>
        <table class="min-w-full bg-white">
            <thead>
                <tr>
                    <th class="py-2">ID</th>
                    <th class="py-2">Recipient</th>
                    <th class="py-2">Donation Type</th>
                    <th class="py-2">Date</th>
                    <th class="py-2">Amount</th>
                </tr>
            </thead>
            <tbody>
                @foreach($donations as $donation)
                <tr>
                    <td class="border px-4 py-2">{{ $donation->id }}</td>
                    <td class="border px-4 py-2">{{ $donation->recipient->name }}</td>
                    <td class="border px-4 py-2">{{ $donation->donationType->type_name }}</td>
                    <td class="border px-4 py-2">{{ $donation->DonationDate }}</td>
                    <td class="border px-4 py-2">{{ $donation->Amount }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
