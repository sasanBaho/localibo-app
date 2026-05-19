// Provider type for TypeScript
export type ServiceFilter = "service-one" | "service-two";
export type ServiceType = ServiceFilter;
export type PaymentMethod = string;
export type ServiceLocation = string;

export type Provider = {
  createdAt?: Date;
  imageUrl?: string;
  phoneNumber: string;
  providerName: string;
  selectedServices: ServiceFilter[];
  latitude?: number;
  longitude?: number;
  rating?: number;
  ratingsCount?: number;
  description?: Partial<Record<ServiceType, string>>;
  isAvailable?: boolean;
  paymentMethods?: PaymentMethod[];
  profileViewCount?: number;
  gotMessageCount?: number;
  gotCallCount?: number;
  instaViewCount?: number;
  city?: string;
  country?: string;
  geohash?: string;
  hasTools?: boolean;
  serviceLocation?: ServiceLocation[];
  hasDelivery?: boolean;
  updatedAt?: Date;
  instagramID?: string;
  email?: string;
};

// Replace ServiceFilter, ServiceType, PaymentMethod, ServiceLocation with your actual types
