<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Details</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-4">Donation Details</h1>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <p><strong>ID:</strong> {{ $donation->id }}</p>
            <p><strong>Recipient:</strong> {{ $donation->recipient->name }}</p>
            <p><strong>Donation Type:</strong> {{ $donation->donationType->type_name }}</p>
            <p><strong>Date:</strong> {{ $donation->DonationDate }}</p>
            <p><strong>Amount:</strong> {{ $donation->Amount }}</p>
        </div>
    </div>
</body>
</html>
