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
            <p><strong>ID:</strong> <?php echo e($donation->id); ?></p>
            <p><strong>Recipient:</strong> <?php echo e($donation->recipient->name); ?></p>
            <p><strong>Donation Type:</strong> <?php echo e($donation->donationType->type_name); ?></p>
            <p><strong>Date:</strong> <?php echo e($donation->DonationDate); ?></p>
            <p><strong>Amount:</strong> <?php echo e($donation->Amount); ?></p>
        </div>
    </div>
</body>
</html>
<?php /**PATH C:\Users\Manar\projects\my-new-laravel-app\resources\views\donations\show.blade.php ENDPATH**/ ?>