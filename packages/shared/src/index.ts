export type UserRole = 'buyer' | 'vendor' | 'admin';
export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PaymentProvider = 'paystack' | 'flutterwave' | 'stripe';
export interface ApiResponse<T> { success: boolean; message: string; data?: T; }
