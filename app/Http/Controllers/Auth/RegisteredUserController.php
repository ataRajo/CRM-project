<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validatedData = $request->validate([
                'username' => ['required', 'string', 'max:255', 'unique:users'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
                'UserType' => ['required', 'string'],
                'donorstatus_id' => ['nullable', 'integer', 'exists:donorstatuses,id'],
                'donorclassification_id' => ['nullable', 'integer', 'exists:donorclassifications,id'],
            ]);

            // Check if the user is registering as an admin
            if ($validatedData['UserType'] === 'admin') {
                // Admin-specific validation or setup can be done here if needed
            }

            // Create the user
            $user = User::create([
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'UserType' => $validatedData['UserType'],
                'donorstatus_id' => $validatedData['donorstatus_id'],
                'donorclassification_id' => $validatedData['donorclassification_id'],
            ]);

            event(new Registered($user));

            Auth::login($user);

            // Generate a new API token after successful registration
            $token = $user->createToken('API Token')->plainTextToken;

            // Log the user registration
            \Log::info("User registered: {$user->email}");

            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user->makeHidden(['password', 'remember_token']), // Hide sensitive data
                'token' => $token, // Include the token in the response
            ], 201); // Return 201 Created

        } catch (ValidationException $e) {
            // Log the validation errors
            \Log::error('Validation failed', ['errors' => $e->errors()]);
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422); // Return 422 Unprocessable Entity

        } catch (\Exception $e) {
            // Log the exception message
            \Log::error('Registration failed', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Registration failed'], 500); // Return 500 Internal Server Error
        }
    }
}
