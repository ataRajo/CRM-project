

<?php $__env->startSection('content'); ?>
<div class="container">
    <h1>Request a Donation</h1>
    <form action="<?php echo e(route('donations.store')); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <div class="form-group">
            <label for="recipientID">Recipient</label>
            <select name="recipientID" id="recipientID" class="form-control">
                <?php $__currentLoopData = $recipients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $recipient): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <option value="<?php echo e($recipient->RecipientID); ?>"><?php echo e($recipient->name); ?></option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
        </div>
        <div class="form-group">
            <label for="donationTypeID">Donation Type</label>
            <select name="donationTypeID" id="donationTypeID" class="form-control">
                <?php $__currentLoopData = $donationTypes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <option value="<?php echo e($type->DonationTypeID); ?>"><?php echo e($type->TypeName); ?></option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Manar\projects\my-new-laravel-app\resources\views/donations/request.blade.php ENDPATH**/ ?>