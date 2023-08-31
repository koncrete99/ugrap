import supabase from './supabase';
import { ITEMS_PAGE } from '../utils/constants';

export async function getReviews({ filter, sortBy, page }) {
	let query = supabase
		.from('reviews')
		.select(
			'id, artist, title, release, label, rating, location, date, type, cover, author(name)',
			{ count: 'exact' }
		);

	if (filter) query = query[filter.method || 'eq'](filter.field, filter.value);

	if (sortBy)
		query = query.order(sortBy.field, {
			ascending: sortBy.direction === 'asc',
		});

	if (page) {
		const from = (page - 1) * ITEMS_PAGE;
		const to = from + ITEMS_PAGE - 1;
		query = query.range(from, to);
	}

	const { data, error, count } = await query;

	if (error) {
		console.error(error);
		throw new Error('Reviews konnten nicht geladen werden.');
	}

	return { data, count };
}

export async function getReview(id) {
	const { data, error } = await supabase
		.from('reviews')
		.select('*, author(name)')
		.eq('id', id)
		.single();

	if (error) {
		console.error(error);
		throw new Error('Review konnte nicht geladen werden.');
	}

	return data;
}

export async function searchReviews(searchPhrase) {
	const { data, error } = await supabase
		.from('reviews')
		.select()
		.textSearch('artist', searchPhrase);

	if (error) {
		console.error(error);
		throw new Error('Review konnte nicht gefunden werden.');
	}

	return data;
}
