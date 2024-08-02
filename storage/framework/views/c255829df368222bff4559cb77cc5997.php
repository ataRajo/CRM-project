

<?php $__env->startSection('content'); ?>
<div class="container">
    <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
    
    <?php if(session('error')): ?>
        <div class="alert alert-danger">
            <?php echo e(session('error')); ?>

        </div>
    <?php endif; ?>
    <?php if(session('success')): ?>
        <div class="alert alert-success">
            <?php echo e(session('success')); ?>

        </div>
    <?php endif; ?>

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
            <?php $__currentLoopData = $donations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $donation): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td class="border px-4 py-2"><?php echo e(optional($donation->user)->username); ?></td>
                    <td class="border px-4 py-2"><?php echo e(optional($donation->recipient)->name); ?></td>
                    <td class="border px-4 py-2"><?php echo e(optional($donation->donationType)->TypeName ?? 'N/A'); ?></td>
                    <td class="border px-4 py-2"><?php echo e($donation->formatted_donation_date); ?></td>
                    <td class="border px-4 py-2">$<?php echo e(number_format($donation->Amount, 2)); ?></td>
                    <td class="border px-4 py-2"><?php echo e(ucfirst($donation->status ?? 'N/A')); ?></td>
                    <td class="border px-4 py-2">
                        <form action="<?php echo e(route('admin.donations.updateStatus', $donation->DonationID)); ?>" method="POST">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('PATCH'); ?>
                            <select name="status" class="form-control">
                                <option value="pending" <?php if($donation->status == 'pending'): ?> selected <?php endif; ?>>Pending</option>
                                <option value="confirmed" <?php if($donation->status == 'confirmed'): ?> selected <?php endif; ?>>Confirmed</option>
                                <option value="denied" <?php if($donation->status == 'denied'): ?> selected <?php endif; ?>>Denied</option>
                            </select>
                            <button type="submit" class="btn btn-primary mt-2">Update</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>

    <!-- Pagination Links -->
    <div class="mt-4">
        <?php echo e($donations->links()); ?>

    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Manar\projects\my-new-laravel-app\resources\views/admin/dashboard.blade.php ENDPATH**/ ?>