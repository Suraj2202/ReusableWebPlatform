import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from './whatsapp';

export type Trip = CollectionEntry<'trips'>;

/** All trips, sorted by their `order` then title (stable display order). */
export async function getAllTrips(): Promise<Trip[]> {
  const trips = await getCollection('trips');
  return trips.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

/** Trips grouped by category, each group sorted by `order`. Used by the category blocks (1.6). */
export async function getTripsByCategory(): Promise<Record<Trip['data']['category'], Trip[]>> {
  const trips = await getAllTrips();
  return trips.reduce(
    (acc, trip) => {
      (acc[trip.data.category] ??= []).push(trip);
      return acc;
    },
    {} as Record<Trip['data']['category'], Trip[]>,
  );
}

/** Format an INR amount with the configured symbol and grouped thousands → "₹18,999". */
export function formatPrice(amount: number): string {
  const symbol = siteConfig.site.currency ?? '₹';
  return `${symbol}${amount.toLocaleString('en-IN')}`;
}

/** Nights/days label → "6N · 7D". */
export function formatDuration(nights: number, days: number): string {
  return `${nights}N · ${days}D`;
}
